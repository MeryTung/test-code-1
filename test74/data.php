<?php

  $data = array(
    'errcode' => 0,
    'errmsg' => '',
    'data' => array(
      'name' => 'zhaoyiming',
      'age' => 18
    )
  );

  sleep(0.1);

  echo json_encode($data);
