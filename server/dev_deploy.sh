#!/bin/sh
dir_path=/home/deploy/dev

ssh root@192.168.199.16 "killall -9 java"
ssh root@192.168.199.16 "rm -rf /www/tomcat/tomcat8082/webapps/*"
ssh root@192.168.199.16 "rm -rf /www/tomcat/tomcat8081/webapps/*"
ssh root@192.168.199.16 "rm -rf /www/tomcat/tomcat8080/webapps/*"

scp $dir_path/driver-webapp*.war $dir_path/sardine-resource-webapp*.war $dir_path/freightPricing-webapp*.war root@192.168.199.16:/www/tomcat/tomcat8082/webapps/
ssh root@192.168.199.16 "/www/tomcat/tomcat8082/bin/startup.sh"
scp $dir_path/order-webapp*.war $dir_path/uc-webapp*.war root@192.168.199.16:/www/tomcat/tomcat8081/webapps/
ssh root@192.168.199.16 "/www/tomcat/tomcat8081/bin/startup.sh"
scp $dir_path/sales-webapp*.war $dir_path/pay-webapp*.war $dir_path/bid-webapp*.war  root@192.168.199.16:/www/tomcat/tomcat8080/webapps/
ssh root@192.168.199.16 "/www/tomcat/tomcat8080/bin/startup.sh"

ssh root@192.168.199.17 "killall -9 java"
ssh root@192.168.199.17 "rm -rf /www/tomcat/tomcat8082/webapps/*"
ssh root@192.168.199.17 "rm -rf /www/tomcat/tomcat8081/webapps/*"
ssh root@192.168.199.17 "rm -rf /www/tomcat/tomcat8080/webapps/*"

scp $dir_path/enterprise-app*.war $dir_path/broker-app*.war root@192.168.199.17:/www/tomcat/tomcat8082/webapps/
ssh root@192.168.199.17 "/www/tomcat/tomcat8082/bin/startup.sh"
scp $dir_path/enterprise-vip-web*.war  $dir_path/freightPricing-web.war root@192.168.199.17:/www/tomcat/tomcat8081/webapps/
ssh root@192.168.199.17 "/www/tomcat/tomcat8081/bin/startup.sh"
scp $dir_path/yunma-cargo-app*.war $dir_path/enterprise-sales-app*.war root@192.168.199.17:/www/tomcat/tomcat8080/webapps/
ssh root@192.168.199.17 "/www/tomcat/tomcat8080/bin/startup.sh"


