#!/bin/sh
set -e
php artisan test

(git push) || true

git checkout production
git merge main

git push origin production

git checkout main