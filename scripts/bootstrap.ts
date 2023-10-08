import 'zx/globals';
import dayjs from 'dayjs';
import assert from 'assert';

const weekly = require('../public/weekly.json');
const publishedAt = dayjs(weekly[0].publishedAt)
  .add(7, 'day')
  .format('YYYY/MM/DD');
const content =
  `
---
title: "WIP"
titleImage: ""
titleImageCaption: ""
publishedAt: "${publishedAt}"
draft: true
---

## 本周头条

。

## 一周新闻

- 。

## 深度好文

- 。

## 工具资源

- 。

## Umi 和我
> 关于 Umi 和我最近的进展。欢迎订阅我的 Telegram 频道[《云谦的自说自话》](https://t.me/yqtalk)。

- Umi 例行每周四发一版，我觉得有趣的功能包括，1）。
- 。

## 星球更新
> 不知不觉我的知识星球已维护近一年，更了 350 多篇文章，包含了我们最新的观点和见解。以下是近一周的星球更新，访问「q.sorrycc.com」了解更多。

- 。

## 每周烂梗

。

`.trim() + '\n';
const nextNum = weekly[0].number + 1;
const nextNumStr = nextNum.toString().padStart(4, '0');
const filePath = path.join('docs', 'weekly', `issue-${nextNumStr}.md`);
const absFilePath = path.join(__dirname, '..', filePath);
assert(!fs.existsSync(absFilePath), `File ${filePath} already exists`);
fs.writeFileSync(absFilePath, content, 'utf-8');
console.log(`Bootstrap ${filePath}`);
