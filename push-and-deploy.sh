#!/bin/bash
hexo clean && hexo deploy && git add -A . && git commit -m "$1" && git push