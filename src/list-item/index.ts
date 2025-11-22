/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#account_id ListItem#account_id}
  */
  readonly accountId: string;
  /**
  * A non-negative 32 bit integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#asn ListItem#asn}
  */
  readonly asn?: number;
  /**
  * An informative summary of the list item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#comment ListItem#comment}
  */
  readonly comment?: string;
  /**
  * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#hostname ListItem#hostname}
  */
  readonly hostname?: ListItemHostname;
  /**
  * An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#ip ListItem#ip}
  */
  readonly ip?: string;
  /**
  * The unique ID of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#list_id ListItem#list_id}
  */
  readonly listId: string;
  /**
  * The definition of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#redirect ListItem#redirect}
  */
  readonly redirect?: ListItemRedirect;
}
export interface ListItemHostname {
  /**
  * Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#exclude_exact_hostname ListItem#exclude_exact_hostname}
  */
  readonly excludeExactHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#url_hostname ListItem#url_hostname}
  */
  readonly urlHostname: string;
}

export function listItemHostnameToTerraform(struct?: ListItemHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_exact_hostname: cdktf.booleanToTerraform(struct!.excludeExactHostname),
    url_hostname: cdktf.stringToTerraform(struct!.urlHostname),
  }
}


export function listItemHostnameToHclTerraform(struct?: ListItemHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_exact_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.excludeExactHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ListItemHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExactHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExactHostname = this._excludeExactHostname;
    }
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
      this._excludeExactHostname = undefined;
      this._urlHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeExactHostname = value.excludeExactHostname;
      this._urlHostname = value.urlHostname;
    }
  }

  // exclude_exact_hostname - computed: false, optional: true, required: false
  private _excludeExactHostname?: boolean | cdktf.IResolvable; 
  public get excludeExactHostname() {
    return this.getBooleanAttribute('exclude_exact_hostname');
  }
  public set excludeExactHostname(value: boolean | cdktf.IResolvable) {
    this._excludeExactHostname = value;
  }
  public resetExcludeExactHostname() {
    this._excludeExactHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExactHostnameInput() {
    return this._excludeExactHostname;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#include_subdomains ListItem#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#preserve_path_suffix ListItem#preserve_path_suffix}
  */
  readonly preservePathSuffix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#preserve_query_string ListItem#preserve_query_string}
  */
  readonly preserveQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#source_url ListItem#source_url}
  */
  readonly sourceUrl: string;
  /**
  * Available values: 301, 302, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#status_code ListItem#status_code}
  */
  readonly statusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#subpath_matching ListItem#subpath_matching}
  */
  readonly subpathMatching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#target_url ListItem#target_url}
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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

  // include_subdomains - computed: true, optional: true, required: false
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

  // preserve_path_suffix - computed: true, optional: true, required: false
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

  // preserve_query_string - computed: true, optional: true, required: false
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

  // status_code - computed: true, optional: true, required: false
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

  // subpath_matching - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item cloudflare_list_item}
*/
export class ListItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ListItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ListItem to import
  * @param importFromId The id of the existing ListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ListItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list_item cloudflare_list_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListItemConfig
  */
  public constructor(scope: Construct, id: string, config: ListItemConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_list_item',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._asn = config.asn;
    this._comment = config.comment;
    this._hostname.internalValue = config.hostname;
    this._ip = config.ip;
    this._listId = config.listId;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
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
      hostname: listItemHostnameToTerraform(this._hostname.internalValue),
      ip: cdktf.stringToTerraform(this._ip),
      list_id: cdktf.stringToTerraform(this._listId),
      redirect: listItemRedirectToTerraform(this._redirect.internalValue),
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
      hostname: {
        value: listItemHostnameToHclTerraform(this._hostname.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ListItemHostname",
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
      redirect: {
        value: listItemRedirectToHclTerraform(this._redirect.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ListItemRedirect",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
