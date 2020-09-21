import React from 'react'

import { PageOne } from '../PageOne'
import * as HeaderStories from '../../components/Header/Header.stories'

export default {
  title: 'PAGES/PageOne',
  component: PageOne,
}

const Template = (args) => <PageOne {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
