#!/bin/bash
hexo clean && hexo deploy && cp CNAME docs/ && git add -A . && git commit -m "$1" && git push