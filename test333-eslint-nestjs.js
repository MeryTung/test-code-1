"use strict"
Object.defineProperty(exports, "__esModule", { value: true })

const utils_1 = require("../utils")

const bodyParamMap = new Map()
let reqName = 'req'

// exports.message = 'Use `ValidationDecoratorBody` for data validation'

exports.useValidationDecoratorBody = {
	meta: {
		messages: {
			invalidArgument: 'It is forbidden to use parameters in the @Body',
			invalidTypeAnnotation: 'The parameter type annotation in the method of the controller must be a class',
			invalidDtoClassValidator: 'Each dto field must have a class validator',
			invalidBodyFromReq: 'It is forbidden to read body from Req',
			invalidDtoClassValidatorLength: 'There must be at least 2 class validators for a dto item with IsOptional'
		}
	},
	create(context) {
		return {
			TSInterfaceDeclaration(node) {
				const config = bodyParamMap.get(node.id.name)
				if (config) {
					context.report({
						node: config.node,
						messageId: 'invalidTypeAnnotation'
					})
				}
			},
			ClassDeclaration(node) {
				const config = bodyParamMap.get(node.id.name)
				if (!config) {
					return
				}
				node.body.body.forEach(nodeItem => {
					if (!nodeItem.decorators?.length) {
						context.report({
							node: config.node,
							messageId: 'invalidDtoClassValidator'
						})
					} else if (nodeItem.decorators.find(decorator => decorator.expression.callee.name === 'IsOptional') && nodeItem.decorators.length < 2) {
						context.report({
							node: config.node,
							messageId: 'invalidDtoClassValidatorLength'
						})
					}
				})
			},
			MemberExpression(node) {
				if (node.object.name === reqName && node.property.name === 'body') {
					reqName = ''
					context.report({
						node,
						messageId: 'invalidBodyFromReq'
					})
				}
			},
			MethodDefinition: (node) => {
				const reqParam = node.value.params.find(p => utils_1.getDecoratorByName(p, 'Req'))

				if (reqParam) {
					reqName = reqParam.name
				}

				const bodyParam = node.value.params.find(p => utils_1.getDecoratorByName(p, 'Body'))

				if (bodyParam) {
					const bodyDecorator = utils_1.getDecoratorByName(bodyParam, 'Body')
					if (bodyDecorator.expression.arguments.length) {
						context.report({ node: bodyDecorator, messageId: 'invalidArgument' })
						return
					}

					const { typeAnnotation } = bodyParam
					bodyParamMap.set(typeAnnotation.typeAnnotation.typeName.name, {
						node
					})
				}
			}
		}
	}
}
