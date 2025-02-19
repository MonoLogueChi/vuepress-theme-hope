---
title: Главная страница блога
icon: home
order: 6
category:
  - Блог
tag:
  - Блог
  - Главная
  - Макет
---

`vuepress-theme-hope` позволяет вам включить домашнюю страницу в стиле блога.

Вам нужно установить `layout: BlogHome` и `home: true` на главной странице frontmatter.

<!-- more -->

![Скриншот главной страницы](./assets/blog-light.png#light)
![Скриншот главной страницы](./assets/blog-dark.png#dark)

## Информация о главной странице

Вы можете использовать `heroText`, чтобы установить основной заголовок, и `tagline`, чтобы установить подзаголовок.

Если у вас есть логотип, вы можете поместить его в папку `public` и установить через `heroImage`, если вы хотите отображать другой логотип в темном режиме, вы можете использовать `heroImageDark`. Для лучшего A11y мы рекомендуем вам установить описание логотипа на `heroAlt`.

Вы можете установить фоновое изображение через `bgImage`, но вам нужно обратить внимание, что вы должны указать полный URL-адрес или абсолютный путь. Если вы хотите, чтобы информация отображалась в полноэкранном режиме, вы можете установить `heroFullScreen: true`.

Если вам нужно настроить некоторые стили, вы можете установить стиль логотипа и фонового изображения с помощью `heroImageStyle` и `bgImageStyle`.

## Отображение проекта

Как правило, вы можете захотеть отобразить некоторые проекты, книги, статьи, ссылки, ссылки друзей и т. д. на своей домашней странице.

Вы можете установить их через `projects`, которые представляют собой массив, где каждый элемент является объектом со следующими ключами:

- `name`: обязательно, имя проекта
- `link`: обязательно, ссылка на проект, заполните внешний путь или абсолютный путь
- `desc`: описание проекта
- `icon`: иконка, вы можете указать полный или абсолютный путь ссылки на изображение, также поддерживается иконка FontClass

  Мы предоставляем эти иконки в качестве встроенной поддержки: `"link"`, `"project"`, `"book"`, `"article"`, `"friend"`。

::: info

Полные элементы конфигурации см. в разделе [Конфигурация Frontmatter домашней страницы блога](../../config/frontmatter/blog-home.md).

:::
