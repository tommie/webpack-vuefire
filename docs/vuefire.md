# VueFire Extras

To simplify working with [Firebase](https://firebase.google.com/),
this template includes [VueFire](https://github.com/vuejs/vuefire) as
well as some helpers for development.

The `src/fbdb.js` file contains a small addition to VueFire that
allows easily creating hierarchies of Firebase references. In the
template, the app component sets its `fbref` to the root of the
Firebase realtime database and makes `$fbref` available on a Vue
instance, e.g. in VueFire's `firebase` function. Any instance that
sets `fbref` will make its children be rooted at that reference
instead. This simplifies binding to a user-dependent part of the
database.

## Mocks and local databases

The unit test in `test/unit/specs/Hello.spec.js` uses
[`firebase-mock`](https://github.com/soumak77/firebase-mock) to make
self-contained unit tests.

The development server and the end-to-end tests use
[`firebase-server`](https://github.com/urish/firebase-server) to
provide a local realtime database, letting you play around without a
Firebase account initially. The data in the server is reset every time
the server restarts. Initial data is populated in
`build/dev-server.js`.

**NOTE** When running under the development server, **all** Firebase
WebSocket connections are routed to the development server. If your
application uses more than one database, this may not be what you
want, and you will need to make exceptions in `build/dev-client.js`.
