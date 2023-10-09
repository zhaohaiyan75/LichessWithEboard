// import { Capacitor } from '@capacitor/core'
import h from 'mithril/hyperscript'
// import router from '../router'
import socket from '../socket'
import * as helper from './helper'
import layout from './layout'
import { dropShadowHeader, backButton } from './shared/common'
import i18n from '../i18n'

export default {
  oncreate: helper.viewSlideIn,

  oninit() {
    socket.createDefault()
  },

  view() {
    const header = dropShadowHeader(null, backButton(i18n('about')))
    return layout.free(
      header,
      <div class="aboutBody native_scroller page">
        <p>lichess with eboard is a free, open-source application base on lichess.org moblie{externalLink('Github', 'https://github.com/lichess-org/lichobile')}.</p>

        <p>Its basic function is to connect to the electronic chessboard through Bluetooth, and the chess playing function that can usually only be completed on the mobile terminal is completed on the electronic chessboard.</p>

        <p>Except that you can play chess on Lichess with an electronic chessboard, other functions are exactly the same as Lichess App.</p>

        <ul>

          <li>Lichess with eboard would not exist without lichess.org{externalLink('lichess', 'https://lichess.org')}.</li>

          <li>Finally, the players who come to Lichess with eboard to have fun, relax and learn, without whom this would all be pointless!</li>

        </ul>

        <h2>Links</h2>

          <ul className="about_links">
            <li>{externalLink('Github', 'https://github.com/zhaohaiyan75/LichessWithEboard')}</li>
            <li>{externalLink('Contribute', 'https://github.com/zhaohaiyan75/LichessWithEboard/graphs/contributors')}</li>
            <li>{externalLink('Contact', 'https://github.com/zhaohaiyan75/LichessWithEboard/blob/main/CONTACT.md')}</li>
            <li>{externalLink('Terms of Service', 'https://github.com/zhaohaiyan75/LichessWithEboard/blob/main/TERMSOFSERVICE.md')}</li>
            <li>{externalLink('Privacy Policy', 'https://github.com/zhaohaiyan75/LichessWithEboard/blob/main/PRIVACYPOLICY.md')}</li>
          </ul>

      </div>
    )
  }
} as Mithril.Component


function externalLink(text: string, url: string): Mithril.Child {
  return h('a', {
    className: 'external_link',
    onclick: () => window.open(url, '_blank'),
  }, text)
}

// function internalLink(text: string, route: string): Mithril.Child {
//   return h('a', {
//     onclick: () => router.set(route)
//   }, text)
// }
