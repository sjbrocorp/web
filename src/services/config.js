export const config = {
  apiPath: '/api',
  defaultView: 'tickets',
  events: {
    LOGOUT: 'logout',
    LOAD_MAIN_VIEW: 'load-main-view',
    SHOW_OVERLAY: 'show-overlay',
    HIDE_OVERLAY: 'hide-overlay'
  },
  tickets: {
    sources: [
      'Email',
      'Phone',
      'Other'
    ],
    productTypes: [
      'Box Cable',
      'Cabinet Accessory',
      'Computer Cable',
      'Console Drawer / KVM',
      'Data/Server Cabinet',
      'Data Centre Accessory',
      'Fibre Cable',
      'Modules/Outlets',
      'Network Switch',
      'Patch Cable',
      'Patch Panel',
      'PDU Units',
      'Telephone Accessory',
      'Test Tool',
      'Trunking',
      'UPS / NAS',
      'Wall Cabinet',
      'Other'
    ],
    problemTypes: [
      'Admin Error',
      'Back Order Delay',
      'Billing Error',
      'Cabinet Damaged',
      'Courier Missort',
      'Customer Complaint',
      'Customer Ordered Incorrect Cabinet',
      'Customer Ordered Incorrect Item',
      'Damaged/Faulty Goods',
      'Duplicate Order',
      'General Inquiry',
      'Goods No Longer Required',
      'Incorrect Cabinet Received',
      'Incorrect Item Received',
      'Late/No Delivery',
      'Missing Goods',
      'Product Defect',
      'Product Enquiry',
      'Purchase Order',
      'Quote',
      'Returns Form',
      'Web Quote',
      'Other'
    ],
    statuses: [
      'Pending',
      'Investigating',
      'Awaiting Reply',
      'Solved',
      'Completed'
    ]
  }
}
