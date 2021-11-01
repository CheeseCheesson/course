const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, 
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, 
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
 ]
 let usersOnlineNames  = []
 users.forEach(user => {
    if(user.status === 'online'){
        usersOnlineNames.push(user.username)
    }
 })

 let usersOnlineNames = usersOnlineNames.join(', ')

 alert('Сейчас в онлайн следующие пользователи: ${usersOnlineNames}')
 