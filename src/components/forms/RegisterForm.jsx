import React from "react";
import { Formik, Form } from "formik";
import { Eye, EyeOff } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const RegisterForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  showPassword,
  setShowPassword,
  showPasswordConfirmation,
  setShowPasswordConfirmation,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                error={!!(errors.name && touched.name)}
                {...getFieldProps("name")}
                className="mt-1"
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                error={!!(errors.email && touched.email)}
                {...getFieldProps("email")}
                className="mt-1"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  error={!!(errors.password && touched.password)}
                  {...getFieldProps("password")}
                  className="mt-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="password_confirmation"
                  type={showPasswordConfirmation ? "text" : "password"}
                  placeholder="Confirm password"
                  error={!!(errors.password_confirmation && touched.password_confirmation)}
                  {...getFieldProps("password_confirmation")}
                  className="mt-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswordConfirmation ? (
                    <Eye className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password_confirmation && touched.password_confirmation && (
                <p className="mt-1 text-xs text-red-600">{errors.password_confirmation}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone"
                error={!!(errors.phone && touched.phone)}
                {...getFieldProps("phone")}
                className="mt-1"
              />
              {errors.phone && touched.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Input
                id="address"
                type="text"
                placeholder="Your address"
                error={!!(errors.address && touched.address)}
                {...getFieldProps("address")}
                className="mt-1"
              />
              {errors.address && touched.address && (
                <p className="mt-1 text-xs text-red-600">{errors.address}</p>
              )}
            </div>
          </div>

          <Button type="submit" fullWidth isLoading={isSubmitting || isLoading}>
            {isSubmitting || isLoading ? "Signing up..." : "Register"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;