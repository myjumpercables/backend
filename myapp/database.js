const mysql = require( 'mysql' );
class Database {
    constructor() {
        this.connection = mysql.createConnection({
          host: '35.232.83.9',
          user: 'root',
          password: 'dblab123',
          database: 'maintTracker'
        });
        this.connection.connect();
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

export default Database;