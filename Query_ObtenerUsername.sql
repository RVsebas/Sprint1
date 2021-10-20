select u.username, u.Preg_Seguridad from Usuarios u
where u.username not REGEXP  "^[[:digit:]]+$" 
and u.username regexp  '^[A-Za-z0-9]+$'
and u.username not regexp  '^[a-zA-Z.]+$'
order by u.username asc