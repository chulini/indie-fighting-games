#!/bin/bash
git add -A . && git commit -m "$1" && git push && hexo clean && hexo deploy