echo -e "\n Deploying Siforlat-API...........! 🚗🚗" &&
git pull && 
npm install &&
pm2 stop siforlat-api &&
pm2 delete  siforlat-api &&
pm2 start app.js --name "siforlat-api" &&
pm2 save &&
echo -e "\n Deploy Finished 🎉\n"
