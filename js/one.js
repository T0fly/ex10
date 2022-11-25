var columns=document.querySelectorAll('#columns .column');
var dragEl=null;
[].forEach.call(columns,function(column){
	column.addEventListener("dragstart",domdragstart,false);
	column.addEventListener('dragover',domdragover,false);
	column.addEventListener('drop',domdrop,false);
	column.addEventListener('dragend',domdrapend,false);
});
function domdragstart(e)
{
	e.target.style.opacity='0.5';
	dragEl=this;
	e.dataTransfer.effectAllowed="move";
	e.dataTransfer.setData("text/html",this.innerHTML)
}
function domdragover(e)
{
	if(e.preventDefault)
	{
		e.preventDefault();
	}
	e.dataTransfer.dropEffect='move';
	return false;
}
function domdrop(e) {
	if (dragEl!=this) {
		dragEl.innerHTML=this.innerHTML;
		this.innerHTML=e.dataTransfer.getData('text/html');
	}
	return false;
}
function domdrapend(e){
	[].forEach.call(columns,function(column){
		column.style.opacity='1';
	});
}