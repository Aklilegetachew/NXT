"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0b4f4a 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0b4f4a] rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your project to the next level? We're here to help you
            succeed. Get in touch and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-8 bg-gradient-to-r from-[#0b4f4a] to-[#0d5d57] text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                  <Send className="h-6 w-6" />
                  Send us a message
                </CardTitle>
                <p className="text-[#0b4f4a]/80 text-white/90">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-2 border-gray-200 focus:border-[#0b4f4a] focus:ring-[#0b4f4a]/20 h-12 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="border-2 border-gray-200 focus:border-[#0b4f4a] focus:ring-[#0b4f4a]/20 h-12 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-2 border-gray-200 focus:border-[#0b4f4a] focus:ring-[#0b4f4a]/20 h-12 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="border-2 border-gray-200 focus:border-[#0b4f4a] focus:ring-[#0b4f4a]/20 h-12 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project, goals, and how we can help you achieve them..."
                    rows={6}
                    className="border-2 border-gray-200 focus:border-[#0b4f4a] focus:ring-[#0b4f4a]/20 resize-none transition-all duration-200"
                  />
                </div>

                <Button className="w-full bg-[#0b4f4a] hover:bg-[#0d5d57] text-white py-4 text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map - Takes 1 column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#0b4f4a] to-[#0d5d57] text-white rounded-t-lg">
                <CardTitle className="text-xl font-semibold">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0b4f4a]/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-[#0b4f4a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 Business Street
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0b4f4a]/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-[#0b4f4a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0b4f4a]/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-[#0b4f4a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 text-sm">contact@company.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0b4f4a]/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-[#0b4f4a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4 bg-gradient-to-br from-[#0b4f4a] to-[#0d5d57] text-white">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Find Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959687750!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0b4f4a]/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-[#0b4f4a] rounded-full animate-pulse"></div>
            <span className="text-[#0b4f4a] font-medium text-sm">
              We typically respond within 2-4 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="w-full lg:w-1/2">
  <div className="h-96 lg:h-full rounded-lg overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.701470809492!2d38.764860211324034!3d8.99959288940983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850b4031ae6d%3A0x6205c136da432529!2sSTERLING%20BUILDING!5e0!3m2!1sen!2set!4v1740995186837!5m2!1sen!2set"
      width="100%"
      height="100%"
      style={{ border: "0" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>; */
}
