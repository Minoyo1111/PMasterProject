import consumer from "../../javascript/channels/consumer"

consumer.subscriptions.create( { channel: "PostChannel" }, {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#item-id-' + data.itemid + '-of-posts-counts').text(data.post_count)

    const element = document.querySelector('.added-post')
    if(!element) return
    const item_id = element.getAttribute('data-item-id');
    if(!item_id) return

    if(item_id == data.itemid){
      $('#post-icon-id-'+ data.itemid)[0].click();
    }
  }
});