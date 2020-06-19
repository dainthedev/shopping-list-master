function handleList(){
    console.log("ready");
    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        console.log("It's Working!");
        let userItem = $("#shopping-list-entry").val();
        console.log(userItem);
        let resultItem = `<li>
        <span class="shopping-item">${userItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        $(".shopping-list").append(resultItem);
    });
    
    //$(".shopping-item-toggle").click(function(event){
    $("ul").on("click", ".shopping-item-toggle", function(event){
        console.log("Second function!")
        let targetItem = $(event.currentTarget);

        let span = targetItem.parent().siblings(".shopping-item");

        //$(".shoppingItem").toggleClass(".shopping-item__checked");
        span.toggleClass("shopping-item__checked");
        let found = $("span").find("span:first-child");
        console.log(found);
        console.log(targetItem);
        console.log(span);
    });

    $("ul").on("click", ".shopping-item-delete", function(event){
        //$("li").filter(`:contains(${userItem})`).remove();
        let takeOut = $(event.currentTarget).parent().parent();
        $(takeOut).remove();
        
    });
}

$(handleList);