/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountDnsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}
  */
  readonly zoneDefaults?: AccountDnsSettingsZoneDefaults;
}
export interface AccountDnsSettingsZoneDefaultsInternalDns {
  /**
  * The ID of the zone to fallback to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}
  */
  readonly referenceZoneId?: string;
}

export function accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_zone_id: cdktf.stringToTerraform(struct!.referenceZoneId),
  }
}


export function accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceZoneId = this._referenceZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceZoneId = value.referenceZoneId;
    }
  }

  // reference_zone_id - computed: false, optional: true, required: false
  private _referenceZoneId?: string; 
  public get referenceZoneId() {
    return this.getStringAttribute('reference_zone_id');
  }
  public set referenceZoneId(value: string) {
    this._referenceZoneId = value;
  }
  public resetReferenceZoneId() {
    this._referenceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceZoneIdInput() {
    return this._referenceZoneId;
  }
}
export interface AccountDnsSettingsZoneDefaultsNameservers {
  /**
  * Nameserver type
  * Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}
  */
  readonly type: string;
}

export function accountDnsSettingsZoneDefaultsNameserversToTerraform(struct?: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AccountDnsSettingsZoneDefaultsSoa {
  /**
  * Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}
  */
  readonly expire: number;
  /**
  * The time to live (TTL) for negative caching of records within the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}
  */
  readonly minTtl: number;
  /**
  * The primary nameserver, which may be used for outbound zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}
  */
  readonly mname: string;
  /**
  * Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}
  */
  readonly refresh: number;
  /**
  * Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}
  */
  readonly retry: number;
  /**
  * The email address of the zone administrator, with the first label representing the local part of the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}
  */
  readonly rname: string;
  /**
  * The time to live (TTL) of the SOA record itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}
  */
  readonly ttl: number;
}

export function accountDnsSettingsZoneDefaultsSoaToTerraform(struct?: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.numberToTerraform(struct!.expire),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    mname: cdktf.stringToTerraform(struct!.mname),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    rname: cdktf.stringToTerraform(struct!.rname),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rname: {
      value: cdktf.stringToHclTerraform(struct!.rname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._rname !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expire = undefined;
      this._minTtl = undefined;
      this._mname = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._rname = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expire = value.expire;
      this._minTtl = value.minTtl;
      this._mname = value.mname;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._rname = value.rname;
      this._ttl = value.ttl;
    }
  }

  // expire - computed: false, optional: false, required: true
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // min_ttl - computed: false, optional: false, required: true
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // mname - computed: false, optional: false, required: true
  private _mname?: string; 
  public get mname() {
    return this.getStringAttribute('mname');
  }
  public set mname(value: string) {
    this._mname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameInput() {
    return this._mname;
  }

  // refresh - computed: false, optional: false, required: true
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: false, optional: false, required: true
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // rname - computed: false, optional: false, required: true
  private _rname?: string; 
  public get rname() {
    return this.getStringAttribute('rname');
  }
  public set rname(value: string) {
    this._rname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface AccountDnsSettingsZoneDefaults {
  /**
  * Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}
  */
  readonly flattenAllCnames?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Foundation DNS Advanced Nameservers on the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}
  */
  readonly foundationDns?: boolean | cdktf.IResolvable;
  /**
  * Settings for this internal zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}
  */
  readonly internalDns?: AccountDnsSettingsZoneDefaultsInternalDns;
  /**
  * Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}
  */
  readonly multiProvider?: boolean | cdktf.IResolvable;
  /**
  * Settings determining the nameservers through which the zone should be available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}
  */
  readonly nameservers?: AccountDnsSettingsZoneDefaultsNameservers;
  /**
  * The time to live (TTL) of the zone's nameserver (NS) records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}
  */
  readonly nsTtl?: number;
  /**
  * Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}
  */
  readonly secondaryOverrides?: boolean | cdktf.IResolvable;
  /**
  * Components of the zone's SOA record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}
  */
  readonly soa?: AccountDnsSettingsZoneDefaultsSoa;
  /**
  * Whether the zone mode is a regular or CDN/DNS only zone.
  * Available values: "standard", "cdn_only", "dns_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}
  */
  readonly zoneMode?: string;
}

export function accountDnsSettingsZoneDefaultsToTerraform(struct?: AccountDnsSettingsZoneDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flatten_all_cnames: cdktf.booleanToTerraform(struct!.flattenAllCnames),
    foundation_dns: cdktf.booleanToTerraform(struct!.foundationDns),
    internal_dns: accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct!.internalDns),
    multi_provider: cdktf.booleanToTerraform(struct!.multiProvider),
    nameservers: accountDnsSettingsZoneDefaultsNameserversToTerraform(struct!.nameservers),
    ns_ttl: cdktf.numberToTerraform(struct!.nsTtl),
    secondary_overrides: cdktf.booleanToTerraform(struct!.secondaryOverrides),
    soa: accountDnsSettingsZoneDefaultsSoaToTerraform(struct!.soa),
    zone_mode: cdktf.stringToTerraform(struct!.zoneMode),
  }
}


export function accountDnsSettingsZoneDefaultsToHclTerraform(struct?: AccountDnsSettingsZoneDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flatten_all_cnames: {
      value: cdktf.booleanToHclTerraform(struct!.flattenAllCnames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    foundation_dns: {
      value: cdktf.booleanToHclTerraform(struct!.foundationDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_dns: {
      value: accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct!.internalDns),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountDnsSettingsZoneDefaultsInternalDns",
    },
    multi_provider: {
      value: cdktf.booleanToHclTerraform(struct!.multiProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nameservers: {
      value: accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct!.nameservers),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountDnsSettingsZoneDefaultsNameservers",
    },
    ns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.nsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_overrides: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soa: {
      value: accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct!.soa),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountDnsSettingsZoneDefaultsSoa",
    },
    zone_mode: {
      value: cdktf.stringToHclTerraform(struct!.zoneMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountDnsSettingsZoneDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flattenAllCnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenAllCnames = this._flattenAllCnames;
    }
    if (this._foundationDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.foundationDns = this._foundationDns;
    }
    if (this._internalDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDns = this._internalDns?.internalValue;
    }
    if (this._multiProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiProvider = this._multiProvider;
    }
    if (this._nameservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers?.internalValue;
    }
    if (this._nsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsTtl = this._nsTtl;
    }
    if (this._secondaryOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryOverrides = this._secondaryOverrides;
    }
    if (this._soa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soa = this._soa?.internalValue;
    }
    if (this._zoneMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMode = this._zoneMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountDnsSettingsZoneDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flattenAllCnames = undefined;
      this._foundationDns = undefined;
      this._internalDns.internalValue = undefined;
      this._multiProvider = undefined;
      this._nameservers.internalValue = undefined;
      this._nsTtl = undefined;
      this._secondaryOverrides = undefined;
      this._soa.internalValue = undefined;
      this._zoneMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flattenAllCnames = value.flattenAllCnames;
      this._foundationDns = value.foundationDns;
      this._internalDns.internalValue = value.internalDns;
      this._multiProvider = value.multiProvider;
      this._nameservers.internalValue = value.nameservers;
      this._nsTtl = value.nsTtl;
      this._secondaryOverrides = value.secondaryOverrides;
      this._soa.internalValue = value.soa;
      this._zoneMode = value.zoneMode;
    }
  }

  // flatten_all_cnames - computed: false, optional: true, required: false
  private _flattenAllCnames?: boolean | cdktf.IResolvable; 
  public get flattenAllCnames() {
    return this.getBooleanAttribute('flatten_all_cnames');
  }
  public set flattenAllCnames(value: boolean | cdktf.IResolvable) {
    this._flattenAllCnames = value;
  }
  public resetFlattenAllCnames() {
    this._flattenAllCnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenAllCnamesInput() {
    return this._flattenAllCnames;
  }

  // foundation_dns - computed: false, optional: true, required: false
  private _foundationDns?: boolean | cdktf.IResolvable; 
  public get foundationDns() {
    return this.getBooleanAttribute('foundation_dns');
  }
  public set foundationDns(value: boolean | cdktf.IResolvable) {
    this._foundationDns = value;
  }
  public resetFoundationDns() {
    this._foundationDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationDnsInput() {
    return this._foundationDns;
  }

  // internal_dns - computed: false, optional: true, required: false
  private _internalDns = new AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
  public get internalDns() {
    return this._internalDns;
  }
  public putInternalDns(value: AccountDnsSettingsZoneDefaultsInternalDns) {
    this._internalDns.internalValue = value;
  }
  public resetInternalDns() {
    this._internalDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsInput() {
    return this._internalDns.internalValue;
  }

  // multi_provider - computed: false, optional: true, required: false
  private _multiProvider?: boolean | cdktf.IResolvable; 
  public get multiProvider() {
    return this.getBooleanAttribute('multi_provider');
  }
  public set multiProvider(value: boolean | cdktf.IResolvable) {
    this._multiProvider = value;
  }
  public resetMultiProvider() {
    this._multiProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiProviderInput() {
    return this._multiProvider;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers = new AccountDnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: AccountDnsSettingsZoneDefaultsNameservers) {
    this._nameservers.internalValue = value;
  }
  public resetNameservers() {
    this._nameservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }

  // ns_ttl - computed: false, optional: true, required: false
  private _nsTtl?: number; 
  public get nsTtl() {
    return this.getNumberAttribute('ns_ttl');
  }
  public set nsTtl(value: number) {
    this._nsTtl = value;
  }
  public resetNsTtl() {
    this._nsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsTtlInput() {
    return this._nsTtl;
  }

  // secondary_overrides - computed: false, optional: true, required: false
  private _secondaryOverrides?: boolean | cdktf.IResolvable; 
  public get secondaryOverrides() {
    return this.getBooleanAttribute('secondary_overrides');
  }
  public set secondaryOverrides(value: boolean | cdktf.IResolvable) {
    this._secondaryOverrides = value;
  }
  public resetSecondaryOverrides() {
    this._secondaryOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryOverridesInput() {
    return this._secondaryOverrides;
  }

  // soa - computed: false, optional: true, required: false
  private _soa = new AccountDnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
  public get soa() {
    return this._soa;
  }
  public putSoa(value: AccountDnsSettingsZoneDefaultsSoa) {
    this._soa.internalValue = value;
  }
  public resetSoa() {
    this._soa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaInput() {
    return this._soa.internalValue;
  }

  // zone_mode - computed: false, optional: true, required: false
  private _zoneMode?: string; 
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
  public set zoneMode(value: string) {
    this._zoneMode = value;
  }
  public resetZoneMode() {
    this._zoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneModeInput() {
    return this._zoneMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}
*/
export class AccountDnsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_dns_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountDnsSettings to import
  * @param importFromId The id of the existing AccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountDnsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings cloudflare_account_dns_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountDnsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AccountDnsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_dns_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._accountId = config.accountId;
    this._zoneDefaults.internalValue = config.zoneDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // zone_defaults - computed: false, optional: true, required: false
  private _zoneDefaults = new AccountDnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
  public get zoneDefaults() {
    return this._zoneDefaults;
  }
  public putZoneDefaults(value: AccountDnsSettingsZoneDefaults) {
    this._zoneDefaults.internalValue = value;
  }
  public resetZoneDefaults() {
    this._zoneDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneDefaultsInput() {
    return this._zoneDefaults.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      zone_defaults: accountDnsSettingsZoneDefaultsToTerraform(this._zoneDefaults.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_defaults: {
        value: accountDnsSettingsZoneDefaultsToHclTerraform(this._zoneDefaults.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountDnsSettingsZoneDefaults",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
