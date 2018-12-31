<template>
  <div class="my_post_copyright">
    <remote-js src="//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js"></remote-js>
    <remote-js src="//cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></remote-js>
    <remote-js src="//unpkg.com/sweetalert/dist/sweetalert.min.js"></remote-js>
    <p>
      <span>本文标题:</span>
      <!--a href="{{ url_for(page.path) }}">{{ page.title }}</a-->
    </p>
    <p>
      <span>文章作者:</span>
      <!--a href="/" title="访问 {{ theme.author }} 的个人博客">{{ theme.author }}</a-->
    </p>
    <p>
      <span>发布时间:</span>
      <!--span>{{ page.date.format("YYYY年MM月DD日 - HH:MM") }}</span-->
       <span>page.date.format("YYYY年MM月DD日 - HH:MM") </span>
    </p>
    <p>
      <span>原始链接:</span>
      <!--a href="{{ url_for(page.path) }}" title="{{ page.title }}">{{ page.permalink }}</a-->
      <!--span class="copy-path" title="点击复制文章链接">
        <i class="fa fa-clipboard" data-clipboard-text="{{ page.permalink }}" aria-label="复制成功！"></i>
      </span-->
    </p>
    <p>
      <span>许可协议:</span>
      <i class="fa fa-creative-commons"></i>
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        target="_blank"
        title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
      >署名-非商业性使用-禁止演绎 4.0 国际</a> 转载请保留原文链接及作者。
    </p>
  </div>
</template>

<!--script>
var clipboard = new Clipboard(".fa-clipboard");
$(".fa-clipboard").click(function() {
  clipboard.on("success", function() {
    swal({
      title: "",
      text: "复制成功",
      icon: "success",
      showConfirmButton: true
    });
  });
});
</script-->

<style lang="stylus">
.my_post_copyright {
  width: 85%;
  max-width: 45em;
  margin: 2.8em auto 0;
  padding: 0.5em 1em;
  border: 1px solid #d3d3d3;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255, 255, 255, 0.4);
}

.my_post_copyright p {
  margin: 0;
}

.my_post_copyright span {
  display: inline-block;
  width: 5.2em;
  color: #b5b5b5;
  font-weight: bold;
}

.my_post_copyright .raw {
  margin-left: 1em;
  width: 5em;
}

.my_post_copyright a {
  color: #808080;
  border-bottom: 0;
}

.my_post_copyright a:hover {
  color: #a3d2a3;
  text-decoration: underline;
}

.my_post_copyright:hover .fa-clipboard {
  color: #000;
}

.my_post_copyright .post-url:hover {
  font-weight: normal;
}

.my_post_copyright .copy-path {
  margin-left: 1em;
  width: 1em;

}

.my_post_copyright .copy-path:hover {
  color: #808080;
  cursor: pointer;
}
</style>