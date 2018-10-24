# IoTDoorControl-Server
The Server for IoTDoorControl Project.

# Introduction
1. What's the main problem I would like to resolve? <br />
A: Most of apartment in Taiwan has intercom for communicate with someone who at the Lobby. They do go with remote door open function; A button located on intercom. But They can not trigger the function by internet, so you can not open the door everywhere, even not at home.

2. What technology I have been used on this project? <br />
```
Programming Language: Node.js
Protocol: MQTT / HTTP
Database: MongoDB
```

3. How does it exactly? <br />
A: For easy-to-build purpose, I have been used `MQTT` as main protocol to communicate between Server (This Repo) and Client (On Intercom). <br />
That can make receive command without real IP address, that's mean you can just connect to WiFi without other any setting and use it.

```
Server -------------> MQTT broker <------------- Client
         (Publish)                   (Subscribe)
```

# Resource
1. [FronEnd Repo](https://github.com/maxchou415/IoTDoorControl-FrontEnd/)
2. [Client Repo](https://github.com/maxchou415/IoTDoorControl-Client/)