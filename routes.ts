/**
 * Array de rutas que son accesibles al publico.
 * Estas rutas no requieren autenticacion
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * Array de rutas usado para autentificacion
 * Estas routas redirecionan a usuarios logueados a /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * Rutas que comienzen con este prefijo sirven para autenticarse.
 * @type {string}
 */
export const apiAuthPrefix = "api/auth";

/**
 * Redireccionamiento por default luego de logguearse con exito.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
