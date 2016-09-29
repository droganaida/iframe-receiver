
exports.get = function(req, res){

    res.locals.title = '#BlondieCode - общаемся с сетью сателлитов';
    res.locals.htmldescription = 'Кроссдоменное взаимодействие с Iframe';

    res.render('./main/main');
};
