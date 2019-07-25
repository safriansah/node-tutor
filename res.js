exports.ok=function(values, res){
    const data={
        'status': 200,
        'message': 'Success',
        'data': values
    };
    res.json(data);
    res.end;
}

exports.bad=function(values, res){
    const data={
        'status': 400,
        'message': 'Failed',
        'data': values
    };
    res.json(data);
    res.end;
};