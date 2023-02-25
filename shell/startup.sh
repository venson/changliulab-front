#!/bin/bash
CMD="node"

checkPid(){
    echo "Checking if the server is running"
    ps=$(ps | grep "${CMD}")
    if [ -n "$ps" ]; then
      echo "Following PID are the server"
      pid=$(echo "$ps" | awk '{print $1}')
    else
    echo "No service is running"
    pid=0
    fi

}

startService(){
  checkPid
  if [ "${pid}" != 0 ]; then
  echo " Kill running service"
  kill -9 "${pid}"
  startService
  else
    echo "=========="
    echo "start service"
    nohup yarn start  >> start.out 2>&1 &
  fi
}

startService