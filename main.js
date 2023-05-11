document.getElementById('submitBtn').addEventListener('click', () => { submitClick() });

class Comment {
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;

        }
}
    classCommentService 
staticurl=https//6458486d4eb3f674df714c6f.mockapi.io/:endpoint';
staticgetAllComments() 
    return $.get(this.url)
    "staticgetComment"("id")
        return $.get((this.url) + `/${id}`);
    

    staticcreateComment(name, comment)
        return $.post(this.url, name, comment);

staticupdateComment(id, comment)
        console.log(id);
        $(`#editComment_${id}`).show();
        $(`#${id} p`).hide();

        console.log(comment);
        return $.ajax({
            url: this.url + '/' + id,
            dataType: 'json',
            data: JSON.stringify({ comment: comment }),
            contentType: 'application/json',
            type: 'PUT'
        }).then(() => {
            return CommentService.getAllComments();
        })
            .then((comments) => {
                DOMManager.render(comments);
            });

            staticdeleteComment(id) 
                return $.ajax({
                    url: this.url + `/${id}`,
                    type: 'DELETE'
                });
            
                staticrender(comments)
                    this.comments = comments;
                    $('#app').empty();
                    for (let comment of comments) {
                        $('#app').prepend}
                        staticupdateComment(id)
                        $(`#editComment_${id}`).show();
                        $(`#${id} p`).hide();
                        function submitClick() {
                            let name = document.getElementById('fullName').value;
                            let comment = document.getElementById('commentBox').value;
                            DOMManager.createComment(name, comment);
                            document.getElementById('fullName').value = "";
                            document.getElementById('commentBox').value = ""
                        }
                        
