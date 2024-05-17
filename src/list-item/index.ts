/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListItemAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#account_id ListItemA#account_id}
  */
  readonly accountId: string;
  /**
  * Autonomous system number to include in the list. Must provide only one of: `ip`, `asn`, `redirect`, `hostname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#asn ListItemA#asn}
  */
  readonly asn?: number;
  /**
  * An optional comment for the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#comment ListItemA#comment}
  */
  readonly comment?: string;
  /**
  * IP address to include in the list. Must provide only one of: `ip`, `asn`, `redirect`, `hostname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#ip ListItemA#ip}
  */
  readonly ip?: string;
  /**
  * The list identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#list_id ListItemA#list_id}
  */
  readonly listId: string;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#hostname ListItemA#hostname}
  */
  readonly hostname?: ListItemHostname[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#redirect ListItemA#redirect}
  */
  readonly redirect?: ListItemRedirect[] | cdktf.IResolvable;
}
export interface ListItemHostname {
  /**
  * The FQDN to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#url_hostname ListItemA#url_hostname}
  */
  readonly urlHostname: string;
}

export function listItemHostnameToTerraform(struct?: ListItemHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_hostname: cdktf.stringToTerraform(struct!.urlHostname),
  }
}


export function listItemHostnameToHclTerraform(struct?: ListItemHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_hostname: {
      value: cdktf.stringToHclTerraform(struct!.urlHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ListItemHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHostname = this._urlHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ListItemHostnameList extends cdktf.ComplexList {
  public internalValue? : ListItemHostname[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ListItemHostnameOutputReference {
    return new ListItemHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListItemRedirect {
  /**
  * Whether the redirect also matches subdomains of the source url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#include_subdomains ListItemA#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Whether the redirect target url should keep the query string of the request's url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#preserve_path_suffix ListItemA#preserve_path_suffix}
  */
  readonly preservePathSuffix?: boolean | cdktf.IResolvable;
  /**
  * Whether the redirect target url should keep the query string of the request's url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#preserve_query_string ListItemA#preserve_query_string}
  */
  readonly preserveQueryString?: boolean | cdktf.IResolvable;
  /**
  * The source url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#source_url ListItemA#source_url}
  */
  readonly sourceUrl: string;
  /**
  * The status code to be used when redirecting a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#status_code ListItemA#status_code}
  */
  readonly statusCode?: number;
  /**
  * Whether the redirect also matches subpaths of the source url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#subpath_matching ListItemA#subpath_matching}
  */
  readonly subpathMatching?: boolean | cdktf.IResolvable;
  /**
  * The target url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#target_url ListItemA#target_url}
  */
  readonly targetUrl: string;
}

export function listItemRedirectToTerraform(struct?: ListItemRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    preserve_path_suffix: cdktf.booleanToTerraform(struct!.preservePathSuffix),
    preserve_query_string: cdktf.booleanToTerraform(struct!.preserveQueryString),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    subpath_matching: cdktf.booleanToTerraform(struct!.subpathMatching),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
}


export function listItemRedirectToHclTerraform(struct?: ListItemRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_path_suffix: {
      value: cdktf.booleanToHclTerraform(struct!.preservePathSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.preserveQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subpath_matching: {
      value: cdktf.booleanToHclTerraform(struct!.subpathMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ListItemRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ListItemRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSubdomains = undefined;
      this._preservePathSuffix = undefined;
      this._preserveQueryString = undefined;
      this._sourceUrl = undefined;
      this._statusCode = undefined;
      this._subpathMatching = undefined;
      this._targetUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
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
  private _preservePathSuffix?: boolean | cdktf.IResolvable; 
  public get preservePathSuffix() {
    return this.getBooleanAttribute('preserve_path_suffix');
  }
  public set preservePathSuffix(value: boolean | cdktf.IResolvable) {
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
  private _preserveQueryString?: boolean | cdktf.IResolvable; 
  public get preserveQueryString() {
    return this.getBooleanAttribute('preserve_query_string');
  }
  public set preserveQueryString(value: boolean | cdktf.IResolvable) {
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
  private _subpathMatching?: boolean | cdktf.IResolvable; 
  public get subpathMatching() {
    return this.getBooleanAttribute('subpath_matching');
  }
  public set subpathMatching(value: boolean | cdktf.IResolvable) {
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

export class ListItemRedirectList extends cdktf.ComplexList {
  public internalValue? : ListItemRedirect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ListItemRedirectOutputReference {
    return new ListItemRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item cloudflare_list_item}
*/
export class ListItemA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ListItemA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ListItemA to import
  * @param importFromId The id of the existing ListItemA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ListItemA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.33.0/docs/resources/list_item cloudflare_list_item} Resource
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
        providerVersion: '4.33.0',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _hostname = new ListItemHostnameList(this, "hostname", false);
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: ListItemHostname[] | cdktf.IResolvable) {
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
  private _redirect = new ListItemRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ListItemRedirect[] | cdktf.IResolvable) {
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
      ip: cdktf.stringToTerraform(this._ip),
      list_id: cdktf.stringToTerraform(this._listId),
      hostname: cdktf.listMapper(listItemHostnameToTerraform, true)(this._hostname.internalValue),
      redirect: cdktf.listMapper(listItemRedirectToTerraform, true)(this._redirect.internalValue),
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
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.listMapperHcl(listItemHostnameToHclTerraform, true)(this._hostname.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ListItemHostnameList",
      },
      redirect: {
        value: cdktf.listMapperHcl(listItemRedirectToHclTerraform, true)(this._redirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ListItemRedirectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
