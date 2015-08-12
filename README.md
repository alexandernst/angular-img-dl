# AngularJS Image Downloader[![Build Status](https://travis-ci.org/alexandernst/angular-img-dl.svg?branch=master)](https://travis-ci.org/alexandernst/angular-img-dl)
Angular directive for downloading images as blobs.

Especially useful when used with [ng-file-upload](https://github.com/danialfarid/ng-file-upload).

## Attributes

* `angular-img-dl-url` - URL of the image that should be downloaded
* `angular-img-dl-model` - The scope variable where the image blob will be stored

## Example usage

    <div ngf-background="blob"
        angular-img-dl angular-img-dl-url="{{ demourl }}" angular-img-dl-model="blob">
    </div>

## Demo

[Plnkr demo](http://plnkr.co/edit/53Dum3gQfKDUu8xkPsNq?p=preview)
