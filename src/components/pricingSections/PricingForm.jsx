import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./styles/PricingForm.module.css";

function PricingForm({ defaultValues = {}, onSubmit, isEdit = false }) {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            price: { monthly: "", yearly: "" },
            description: "",
            featuresAvailable: [],
            featuresUnavailable: [],
            popular: false,
        },
    });

    // Reset when defaultValues arrive
    useEffect(() => {
        if (defaultValues && Object.keys(defaultValues).length > 0) {
            reset({
                name: defaultValues.name,
                price: {
                    monthly: defaultValues.monthly_price,
                    yearly: defaultValues.yearly_price,
                },
                description: defaultValues.description,
                featuresAvailable: defaultValues.features_available || [],
                featuresUnavailable: defaultValues.features_unavailable || [],
                popular: defaultValues.popular === 1,
            });
        }
    }, [defaultValues, reset]);

    // ⛔ MUST COME AFTER RESET (cannot be before)
    const { fields: availFields, append: addAvail, remove: removeAvail } =
        useFieldArray({
            control,
            name: "featuresAvailable",
        });

    const { fields: unavailFields, append: addUnavail, remove: removeUnavail } =
        useFieldArray({
            control,
            name: "featuresUnavailable",
        });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>

            {/* NAME */}
            <div className={styles.inputGroup}>
                <label>Plan Name</label>
                <input {...register("name", { required: true })} placeholder="Standard" />
                {errors.name && <p className={styles.error}>Name required</p>}
            </div>

            {/* PRICE MONTHLY */}
            <div className={styles.inputGroup}>
                <label>Monthly Price</label>
                <input
                    {...register("price.monthly", { required: true })}
                    placeholder="₹1,999"
                />
                {errors.price?.monthly && (
                    <p className={styles.error}>Monthly price required</p>
                )}
            </div>

            {/* PRICE YEARLY */}
            <div className={styles.inputGroup}>
                <label>Yearly Price</label>
                <input
                    {...register("price.yearly", { required: true })}
                    placeholder="₹19,990"
                />
                {errors.price?.yearly && (
                    <p className={styles.error}>Yearly price required</p>
                )}
            </div>

            {/* DESCRIPTION */}
            <div className={styles.inputGroup}>
                <label>Description</label>
                <textarea
                    {...register("description", { required: true })}
                    placeholder="Perfect for small businesses..."
                ></textarea>
                {errors.description && (
                    <p className={styles.error}>Description required</p>
                )}
            </div>

            {/* AVAILABLE FEATURES */}
            <div className={styles.inputGroup}>
                <label>Features Available</label>
                {availFields.map((field, index) => (
                    <div key={field.id} className={styles.dynamicRow}>
                        <input
                            {...register(`featuresAvailable.${index}`, { required: true })}
                            placeholder="Setup Assistance"
                        />
                        <button
                            type="button"
                            className={styles.delBtn}
                            onClick={() => removeAvail(index)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addBtn}
                    onClick={() => addAvail("")}
                >
                    + Add Feature
                </button>
            </div>

            {/* UNAVAILABLE FEATURES */}
            <div className={styles.inputGroup}>
                <label>Features Unavailable</label>
                {unavailFields.map((field, index) => (
                    <div key={field.id} className={styles.dynamicRow}>
                        <input
                            {...register(`featuresUnavailable.${index}`, { required: true })}
                            placeholder="Product Listing"
                        />
                        <button
                            type="button"
                            className={styles.delBtn}
                            onClick={() => removeUnavail(index)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addBtn}
                    onClick={() => addUnavail("")}
                >
                    + Add Feature
                </button>
            </div>

            {/* POPULAR TOGGLE */}
            <div className={styles.toggleRow}>
                <label>Mark as Popular</label>
                <input type="checkbox" {...register("popular")} />
            </div>

            <button className={styles.submitBtn}>
                {isEdit ? "Update Pricing Card" : "Create Pricing Card"}
            </button>
        </form>
    );
}

export default PricingForm;
