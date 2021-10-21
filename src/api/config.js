module.exports={
    api:{
        port:process.env.PORT_API || '3000'
    },
    mysql:{
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || '3306',
        user: process.env.USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'Nokyd9MES&fY4tH&',
        database: process.env.MYSQL_DATABASE || 'agenda_Telefonica'
    }
}