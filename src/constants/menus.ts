import transparency from '@images/icon/transparency.svg'
import vote from '@images/icon/vote.svg'
import community from '@images/icon/community.svg'
import token from '@images/icon/token.svg'
import myb from '@images/icon/myb.svg'
import ventures from '@images/icon/ventures.svg'
import dev from '@images/icon/dev.svg'
import github from '@images/icon/github.svg'
import go from '@images/icon/go.svg'
import mydax from '@images/icon/mydax.svg'
import task from '@images/icon/task.svg'
import tools from '@images/icon/tools.svg'
import company from '@images/icon/company.svg'
import content from '@images/icon/content.svg'
import whitepaper from '@images/icon/whitepaper.svg'
import blog from '@images/icon/blog.svg'

export interface MenuLinkProps {
  title: string;
  text: string;
  linkTo: string;
  icon:  string;
}

export interface MenuButtonProps {
  text: string;
  linkTo: string;
}

export interface MenuItemProps {
  title: string;
  links?: Array<MenuLinkProps>;
  button?: MenuButtonProps;
  active?: boolean;
  toggle?: (index: number) => void;
  key?: number;
  index?: number;
}

export interface MenuProps {
  items: Array<MenuItemProps>;
}

export const menuData = [
  {
    title: 'Community',
    links: [
      {
        title: 'Transparency Portal',
        text: 'View what the MyBit team is working on in real-time',
        linkTo: 'https://hq.mybit.io/',
        icon: transparency
      },
      {
        title: 'MyBit DAO (testnet)',
        text: 'Propose and Vote on decisions for the MyBit Ecosystem',
        linkTo: 'https://rinkeby.aragon.org/#/0x13ab94f2cb92A395D8dD73638c74d27Ae397868B/',
        icon: vote
      },
      {
        title: 'Community Rankings (coming soon)',
        text: "Help contribute to MyBit's growth and get recognised",
        linkTo: '',
        icon: community
      }
    ],
    button: {
      text: "Get involved on task.market",
      linkTo: "https://ddf.mybit.io/"
    }
  },
  {
    title: 'Investors',
    links: [
      {
        title: 'Token Distribution',
        text: 'Easiest way to purchase MyBit Tokens (MYB)',
        linkTo: 'https://td.mybit.io/',
        icon: token
      },
      {
        title: 'MyBit Token (MYB)',
        text: 'The native token that powers the MyBit Ecosystem',
        linkTo: 'https://learn.mybit.io/learn/mybit-token-myb-1',
        icon: myb
      },
      {
        title: 'Ventures',
        text: 'DAO funds that support the growth of MyBit projects',
        linkTo: '/ventures',
        icon: ventures
      }
    ],
    button: {
      text: "Learn more on Master Portal",
      linkTo: "/ventures"
    }
  },
  {
    title: 'Developers',
    links: [
      {
        title: 'Developer Portal',
        text: 'Guide to building on the MyBit Network',
        linkTo: 'https://developer.mybit.io/portal/',
        icon: dev
      },
      {
        title: 'Github',
        text: 'View and collaborate on the code that powers the MyBit Ecosystem',
        linkTo: 'https://github.com/myBitFoundation/',
        icon: github
      }
    ],
    button: {
      text: "Get involved on task.market",
      linkTo: "https://ddf.mybit.io"
    }
  },
  {
    title: 'Applications',
    links: [
      {
        title: 'MyBit Go',
        text: 'Invest in the machine economy through a decentralised IoT investment platform',
        linkTo: 'https://app.mybit.io/',
        icon: go
      },
      {
        title: 'MYDAX',
        text: 'Decentralised exchange optimised for simplicity and ease of use',
        linkTo: 'https://mydax.io',
        icon: mydax
      },
      {
        title: 'Task.Market',
        text: 'Decentralised workflow and collaboration tool built on Bounties Network',
        linkTo: 'https://ddf.mybit.io',
        icon: task
      },
      {
        title: 'Other Tools & dApps',
        text: 'Explore everything else MyBit has built or developed so far',
        linkTo: '/tools',
        icon: tools
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Company',
        text: 'Learn about MyBit and the team',
        linkTo: '/about',
        icon: company
      },
      {
        title: 'Content Portal',
        text: 'In-depth resource to get you up to speed on all things MyBit',
        linkTo: 'https://learn.mybit.io/',
        icon: content
      },
      {
        title: 'Whitepaper',
        text: "Technical overview of MyBit's core products",
        linkTo: 'https://whitepaper.mybit.io/',
        icon: whitepaper
      },
      {
        title: 'Blog',
        text: 'Stay up to date on the latest news and announcements',
        linkTo: 'https://medium.com/mybit-dapp',
        icon: blog
      }
    ]
  }
]