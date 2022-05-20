function phongto(id, percent, second)
{
    var doc = document.getElementById(id);
    doc.style.transform = 'scale(' + percent + ')';
    doc.style.transition = second;
}

function thunho(id, second)
{
    var doc = document.getElementById(id);
    doc.style.transform = 'scale(100%)';
    doc.style.transition = second;
}