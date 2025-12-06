/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#parent Organization#parent}
  */
  readonly parent?: OrganizationParent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#profile Organization#profile}
  */
  readonly profile?: OrganizationProfile;
}
export interface OrganizationMetaFlags {
}

export function organizationMetaFlagsToTerraform(struct?: OrganizationMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationMetaFlagsToHclTerraform(struct?: OrganizationMetaFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationMetaFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMetaFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_creation - computed: true, optional: false, required: false
  public get accountCreation() {
    return this.getStringAttribute('account_creation');
  }

  // account_deletion - computed: true, optional: false, required: false
  public get accountDeletion() {
    return this.getStringAttribute('account_deletion');
  }

  // account_migration - computed: true, optional: false, required: false
  public get accountMigration() {
    return this.getStringAttribute('account_migration');
  }

  // account_mobility - computed: true, optional: false, required: false
  public get accountMobility() {
    return this.getStringAttribute('account_mobility');
  }

  // sub_org_creation - computed: true, optional: false, required: false
  public get subOrgCreation() {
    return this.getStringAttribute('sub_org_creation');
  }
}
export interface OrganizationMeta {
}

export function organizationMetaToTerraform(struct?: OrganizationMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationMetaToHclTerraform(struct?: OrganizationMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new OrganizationMetaFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
}
export interface OrganizationParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function organizationParentToTerraform(struct?: OrganizationParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function organizationParentToHclTerraform(struct?: OrganizationParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationParent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationParent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface OrganizationProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#business_address Organization#business_address}
  */
  readonly businessAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#business_email Organization#business_email}
  */
  readonly businessEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#business_name Organization#business_name}
  */
  readonly businessName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#business_phone Organization#business_phone}
  */
  readonly businessPhone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#external_metadata Organization#external_metadata}
  */
  readonly externalMetadata: string;
}

export function organizationProfileToTerraform(struct?: OrganizationProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_address: cdktf.stringToTerraform(struct!.businessAddress),
    business_email: cdktf.stringToTerraform(struct!.businessEmail),
    business_name: cdktf.stringToTerraform(struct!.businessName),
    business_phone: cdktf.stringToTerraform(struct!.businessPhone),
    external_metadata: cdktf.stringToTerraform(struct!.externalMetadata),
  }
}


export function organizationProfileToHclTerraform(struct?: OrganizationProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_address: {
      value: cdktf.stringToHclTerraform(struct!.businessAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_email: {
      value: cdktf.stringToHclTerraform(struct!.businessEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_name: {
      value: cdktf.stringToHclTerraform(struct!.businessName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_phone: {
      value: cdktf.stringToHclTerraform(struct!.businessPhone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_metadata: {
      value: cdktf.stringToHclTerraform(struct!.externalMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessAddress = this._businessAddress;
    }
    if (this._businessEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessEmail = this._businessEmail;
    }
    if (this._businessName !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessName = this._businessName;
    }
    if (this._businessPhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessPhone = this._businessPhone;
    }
    if (this._externalMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalMetadata = this._externalMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessAddress = undefined;
      this._businessEmail = undefined;
      this._businessName = undefined;
      this._businessPhone = undefined;
      this._externalMetadata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessAddress = value.businessAddress;
      this._businessEmail = value.businessEmail;
      this._businessName = value.businessName;
      this._businessPhone = value.businessPhone;
      this._externalMetadata = value.externalMetadata;
    }
  }

  // business_address - computed: false, optional: false, required: true
  private _businessAddress?: string; 
  public get businessAddress() {
    return this.getStringAttribute('business_address');
  }
  public set businessAddress(value: string) {
    this._businessAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAddressInput() {
    return this._businessAddress;
  }

  // business_email - computed: false, optional: false, required: true
  private _businessEmail?: string; 
  public get businessEmail() {
    return this.getStringAttribute('business_email');
  }
  public set businessEmail(value: string) {
    this._businessEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessEmailInput() {
    return this._businessEmail;
  }

  // business_name - computed: false, optional: false, required: true
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
  }

  // business_phone - computed: false, optional: false, required: true
  private _businessPhone?: string; 
  public get businessPhone() {
    return this.getStringAttribute('business_phone');
  }
  public set businessPhone(value: string) {
    this._businessPhone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPhoneInput() {
    return this._businessPhone;
  }

  // external_metadata - computed: false, optional: false, required: true
  private _externalMetadata?: string; 
  public get externalMetadata() {
    return this.getStringAttribute('external_metadata');
  }
  public set externalMetadata(value: string) {
    this._externalMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMetadataInput() {
    return this._externalMetadata;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization cloudflare_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization cloudflare_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_organization',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parent.internalValue = config.parent;
    this._profile.internalValue = config.profile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new OrganizationMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: true, optional: true, required: false
  private _parent = new OrganizationParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: OrganizationParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new OrganizationProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: OrganizationProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent: organizationParentToTerraform(this._parent.internalValue),
      profile: organizationProfileToTerraform(this._profile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: organizationParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationParent",
      },
      profile: {
        value: organizationProfileToHclTerraform(this._profile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationProfile",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
