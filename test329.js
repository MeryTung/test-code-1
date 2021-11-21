;(function () {

  // 单向链表

  class Link {
    constructor (header) {
      this.header = header
    }

    add (node) {
      let p = this.header
      while (p.next) {
        p = p.next
      }
      p.next = node
    }

    reverse () {
      // 1 2 3 4 5
      let p = this.header
      let q = p.next
      while (q) {
        let r = q.next
        q.next = p
        p = q
        q = r
      }
      this.header.next = null
      this.header = p
    }
  }

  const list = new Link({ name: 1 })

  for (let i = 0; i < 5; i++) {
    list.add({ name: i + 1 })
  }

  list.reverse()

  console.log(list)


})();