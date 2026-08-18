import ContactMap from '@/components/contact/ContactMap';
import ContactPage from '@/components/contact/ContactPage'
import React from 'react'

export const metadata = {
  title: "contact us",
  description: "",
};

const Contact = () => {
  return (
    <div>
<ContactPage></ContactPage>
<ContactMap></ContactMap>
    </div>
  )
}

export default Contact