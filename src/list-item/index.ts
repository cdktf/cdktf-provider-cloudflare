/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListItemAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#account_id ListItemA#account_id}
  */
  readonly accountId: string;
  /**
  * Autonomous system number to include in the list. Must provide only one of `ip`, `redirect`, `hostname`, `asn`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#asn ListItemA#asn}
  */
  readonly asn?: number;
  /**
  * An optional comment for the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#comment ListItemA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#id ListItemA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address to include in the list. Must provide only one of `ip`, `redirect`, `hostname`, `asn`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#ip ListItemA#ip}
  */
  readonly ip?: string;
  /**
  * The list identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#list_id ListItemA#list_id}
  */
  readonly listId: string;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#hostname ListItemA#hostname}
  */
  readonly hostname?: ListItemHostname;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#redirect ListItemA#redirect}
  */
  readonly redirect?: ListItemRedirect;
}
export interface ListItemHostname {
  /**
  * The FQDN to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#url_hostname ListItemA#url_hostname}
  */
  readonly urlHostname: string;
}

export function listItemHostnameToTerraform(struct?: ListItemHostnameOutputReference | ListItemHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_hostname: cdktf.stringToTerraform(struct!.urlHostname),
  }
}

export class ListItemHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ListItemHostname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHostname = this._urlHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemHostname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlHostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlHostname = value.urlHostname;
    }
  }

  // url_hostname - computed: false, optional: false, required: true
  private _urlHostname?: string; 
  public get urlHostname() {
    return this.getStringAttribute('url_hostname');
  }
  public set urlHostname(value: string) {
    this._urlHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHostnameInput() {
    return this._urlHostname;
  }
}
export interface ListItemRedirect {
  /**
  * Whether the redirect also matches subdomains of the source url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#include_subdomains ListItemA#include_subdomains}
  */
  readonly includeSubdomains?: string;
  /**
  * Whether to preserve the path suffix when doing subpath matching. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#preserve_path_suffix ListItemA#preserve_path_suffix}
  */
  readonly preservePathSuffix?: string;
  /**
  * Whether the redirect target url should keep the query string of the request's url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#preserve_query_string ListItemA#preserve_query_string}
  */
  readonly preserveQueryString?: string;
  /**
  * The source url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#source_url ListItemA#source_url}
  */
  readonly sourceUrl: string;
  /**
  * The status code to be used when redirecting a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#status_code ListItemA#status_code}
  */
  readonly statusCode?: number;
  /**
  * Whether the redirect also matches subpaths of the source url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#subpath_matching ListItemA#subpath_matching}
  */
  readonly subpathMatching?: string;
  /**
  * The target url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item#target_url ListItemA#target_url}
  */
  readonly targetUrl: string;
}

export function listItemRedirectToTerraform(struct?: ListItemRedirectOutputReference | ListItemRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subdomains: cdktf.stringToTerraform(struct!.includeSubdomains),
    preserve_path_suffix: cdktf.stringToTerraform(struct!.preservePathSuffix),
    preserve_query_string: cdktf.stringToTerraform(struct!.preserveQueryString),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    subpath_matching: cdktf.stringToTerraform(struct!.subpathMatching),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
}

export class ListItemRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ListItemRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._preservePathSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePathSuffix = this._preservePathSuffix;
    }
    if (this._preserveQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveQueryString = this._preserveQueryString;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._subpathMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpathMatching = this._subpathMatching;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeSubdomains = undefined;
      this._preservePathSuffix = undefined;
      this._preserveQueryString = undefined;
      this._sourceUrl = undefined;
      this._statusCode = undefined;
      this._subpathMatching = undefined;
      this._targetUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeSubdomains = value.includeSubdomains;
      this._preservePathSuffix = value.preservePathSuffix;
      this._preserveQueryString = value.preserveQueryString;
      this._sourceUrl = value.sourceUrl;
      this._statusCode = value.statusCode;
      this._subpathMatching = value.subpathMatching;
      this._targetUrl = value.targetUrl;
    }
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: string; 
  public get includeSubdomains() {
    return this.getStringAttribute('include_subdomains');
  }
  public set includeSubdomains(value: string) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // preserve_path_suffix - computed: false, optional: true, required: false
  private _preservePathSuffix?: string; 
  public get preservePathSuffix() {
    return this.getStringAttribute('preserve_path_suffix');
  }
  public set preservePathSuffix(value: string) {
    this._preservePathSuffix = value;
  }
  public resetPreservePathSuffix() {
    this._preservePathSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePathSuffixInput() {
    return this._preservePathSuffix;
  }

  // preserve_query_string - computed: false, optional: true, required: false
  private _preserveQueryString?: string; 
  public get preserveQueryString() {
    return this.getStringAttribute('preserve_query_string');
  }
  public set preserveQueryString(value: string) {
    this._preserveQueryString = value;
  }
  public resetPreserveQueryString() {
    this._preserveQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveQueryStringInput() {
    return this._preserveQueryString;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // subpath_matching - computed: false, optional: true, required: false
  private _subpathMatching?: string; 
  public get subpathMatching() {
    return this.getStringAttribute('subpath_matching');
  }
  public set subpathMatching(value: string) {
    this._subpathMatching = value;
  }
  public resetSubpathMatching() {
    this._subpathMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathMatchingInput() {
    return this._subpathMatching;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item cloudflare_list_item}
*/
export class ListItemA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list_item";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/list_item cloudflare_list_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListItemAConfig
  */
  public constructor(scope: Construct, id: string, config: ListItemAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_list_item',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.16.0',
        providerVersionConstraint: '~> 4.3'
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
    this._asn = config.asn;
    this._comment = config.comment;
    this._id = config.id;
    this._ip = config.ip;
    this._listId = config.listId;
    this._hostname.internalValue = config.hostname;
    this._redirect.internalValue = config.redirect;
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

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new ListItemHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: ListItemHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ListItemRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ListItemRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      asn: cdktf.numberToTerraform(this._asn),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      list_id: cdktf.stringToTerraform(this._listId),
      hostname: listItemHostnameToTerraform(this._hostname.internalValue),
      redirect: listItemRedirectToTerraform(this._redirect.internalValue),
    };
  }
}
