FROM php:7.1-fpm

RUN apt-get update
RUN apt-get install -y libpq-dev postgresql-client git unzip
RUN docker-php-ext-install pdo_pgsql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

WORKDIR /code

COPY . ./

RUN composer install
# RUN php artisan migrate
