export ACCEPT_EULA='n'
export SA_PASSWORD='G123456789!'
export MSSQL_PID='Developer'
set -m
/opt/mssql/bin/sqlservr &
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'G123456789!' -Q "CREATE DATABASE HealthCareMaster" &&  
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'G123456789!' -i "./sql/CredentialCheck.sql" &&
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'G123456789!' -i "./sql/Provider.sql" && 
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'G123456789!' -i "./sql/ProviderCert.sql" &&
fg %1