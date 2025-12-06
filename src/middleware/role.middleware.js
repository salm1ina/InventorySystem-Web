module.exports = function authorize(requiredRoles = []) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ success:false, message:'Not authenticated' });
    if (requiredRoles.length === 0) return next();
    if (requiredRoles.includes(req.user.role) || req.user.role === 'ADMIN') return next();
    return res.status(403).json({ success:false, message:'Forbidden' });
  };
};