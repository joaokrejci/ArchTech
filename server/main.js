import "../imports/startup/server"
import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'
import jwt from 'jsonwebtoken'
const fs = require('fs')

if (Meteor.isServer) {


  Meteor.methods({
    sendClientEmail(clientMail, clientId, user) {            
      let privateKey = fs.readFileSync(process.env.PWD + '/server/private.key');
      let token = jwt.sign({ userId: user._id, clientId }, privateKey)
      const link = `http://localhost:3000/enter_project?id=${token}`

      fs.writeFileSync("/home/joao/link", link)
      
      Email.send({ clientMail, from: "joao.krejci@gmail.com", subject: `${user.username} compartilhou um projeto com você`, text: `Acesse o link ${link} para visualizar o projeto` });
    }
  });

}