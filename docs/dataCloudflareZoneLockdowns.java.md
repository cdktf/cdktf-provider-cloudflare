# `dataCloudflareZoneLockdowns` Submodule <a name="`dataCloudflareZoneLockdowns` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdowns <a name="DataCloudflareZoneLockdowns" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdowns;

DataCloudflareZoneLockdowns.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .createdOn(java.lang.String)
//  .description(java.lang.String)
//  .descriptionSearch(java.lang.String)
//  .ip(java.lang.String)
//  .ipRangeSearch(java.lang.String)
//  .ipSearch(java.lang.String)
//  .maxItems(java.lang.Number)
//  .modifiedOn(java.lang.String)
//  .priority(java.lang.Number)
//  .uriSearch(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.createdOn">createdOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.descriptionSearch">descriptionSearch</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ip">ip</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipRangeSearch">ipRangeSearch</a></code> | <code>java.lang.String</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipSearch">ipSearch</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.uriSearch">uriSearch</a></code> | <code>java.lang.String</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `createdOn`<sup>Optional</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.createdOn"></a>

- *Type:* java.lang.String

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `descriptionSearch`<sup>Optional</sup> <a name="descriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.descriptionSearch"></a>

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ip"></a>

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `ipRangeSearch`<sup>Optional</sup> <a name="ipRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipRangeSearch"></a>

- *Type:* java.lang.String

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `ipSearch`<sup>Optional</sup> <a name="ipSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.ipSearch"></a>

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `modifiedOn`<sup>Optional</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.modifiedOn"></a>

- *Type:* java.lang.String

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `uriSearch`<sup>Optional</sup> <a name="uriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.uriSearch"></a>

- *Type:* java.lang.String

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn">resetCreatedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch">resetDescriptionSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch">resetIpRangeSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch">resetIpSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn">resetModifiedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch">resetUriSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCreatedOn` <a name="resetCreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn"></a>

```java
public void resetCreatedOn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDescriptionSearch` <a name="resetDescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch"></a>

```java
public void resetDescriptionSearch()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpRangeSearch` <a name="resetIpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch"></a>

```java
public void resetIpRangeSearch()
```

##### `resetIpSearch` <a name="resetIpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch"></a>

```java
public void resetIpSearch()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetModifiedOn` <a name="resetModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn"></a>

```java
public void resetModifiedOn()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetUriSearch` <a name="resetUriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch"></a>

```java
public void resetUriSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdowns;

DataCloudflareZoneLockdowns.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdowns;

DataCloudflareZoneLockdowns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdowns;

DataCloudflareZoneLockdowns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdowns;

DataCloudflareZoneLockdowns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZoneLockdowns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZoneLockdowns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZoneLockdowns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput">createdOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput">descriptionSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput">ipRangeSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput">ipSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput">modifiedOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput">uriSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch">descriptionSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch">ipRangeSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch">ipSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch">uriSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result"></a>

```java
public DataCloudflareZoneLockdownsResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a>

---

##### `createdOnInput`<sup>Optional</sup> <a name="createdOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput"></a>

```java
public java.lang.String getCreatedOnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `descriptionSearchInput`<sup>Optional</sup> <a name="descriptionSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput"></a>

```java
public java.lang.String getDescriptionSearchInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `ipRangeSearchInput`<sup>Optional</sup> <a name="ipRangeSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput"></a>

```java
public java.lang.String getIpRangeSearchInput();
```

- *Type:* java.lang.String

---

##### `ipSearchInput`<sup>Optional</sup> <a name="ipSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput"></a>

```java
public java.lang.String getIpSearchInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `modifiedOnInput`<sup>Optional</sup> <a name="modifiedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput"></a>

```java
public java.lang.String getModifiedOnInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `uriSearchInput`<sup>Optional</sup> <a name="uriSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput"></a>

```java
public java.lang.String getUriSearchInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `descriptionSearch`<sup>Required</sup> <a name="descriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch"></a>

```java
public java.lang.String getDescriptionSearch();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `ipRangeSearch`<sup>Required</sup> <a name="ipRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch"></a>

```java
public java.lang.String getIpRangeSearch();
```

- *Type:* java.lang.String

---

##### `ipSearch`<sup>Required</sup> <a name="ipSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch"></a>

```java
public java.lang.String getIpSearch();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `uriSearch`<sup>Required</sup> <a name="uriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch"></a>

```java
public java.lang.String getUriSearch();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownsConfig <a name="DataCloudflareZoneLockdownsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsConfig;

DataCloudflareZoneLockdownsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .createdOn(java.lang.String)
//  .description(java.lang.String)
//  .descriptionSearch(java.lang.String)
//  .ip(java.lang.String)
//  .ipRangeSearch(java.lang.String)
//  .ipSearch(java.lang.String)
//  .maxItems(java.lang.Number)
//  .modifiedOn(java.lang.String)
//  .priority(java.lang.Number)
//  .uriSearch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description">description</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch">descriptionSearch</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip">ip</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch">ipRangeSearch</a></code> | <code>java.lang.String</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch">ipSearch</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch">uriSearch</a></code> | <code>java.lang.String</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `createdOn`<sup>Optional</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `descriptionSearch`<sup>Optional</sup> <a name="descriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch"></a>

```java
public java.lang.String getDescriptionSearch();
```

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `ipRangeSearch`<sup>Optional</sup> <a name="ipRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch"></a>

```java
public java.lang.String getIpRangeSearch();
```

- *Type:* java.lang.String

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `ipSearch`<sup>Optional</sup> <a name="ipSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch"></a>

```java
public java.lang.String getIpSearch();
```

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `modifiedOn`<sup>Optional</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `uriSearch`<sup>Optional</sup> <a name="uriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch"></a>

```java
public java.lang.String getUriSearch();
```

- *Type:* java.lang.String

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

### DataCloudflareZoneLockdownsResult <a name="DataCloudflareZoneLockdownsResult" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResult;

DataCloudflareZoneLockdownsResult.builder()
    .build();
```


### DataCloudflareZoneLockdownsResultConfigurations <a name="DataCloudflareZoneLockdownsResultConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResultConfigurations;

DataCloudflareZoneLockdownsResultConfigurations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownsResultConfigurationsList <a name="DataCloudflareZoneLockdownsResultConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResultConfigurationsList;

new DataCloudflareZoneLockdownsResultConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get"></a>

```java
public DataCloudflareZoneLockdownsResultConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZoneLockdownsResultConfigurationsOutputReference <a name="DataCloudflareZoneLockdownsResultConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference;

new DataCloudflareZoneLockdownsResultConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneLockdownsResultConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a>

---


### DataCloudflareZoneLockdownsResultList <a name="DataCloudflareZoneLockdownsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResultList;

new DataCloudflareZoneLockdownsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get"></a>

```java
public DataCloudflareZoneLockdownsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZoneLockdownsResultOutputReference <a name="DataCloudflareZoneLockdownsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdowns.DataCloudflareZoneLockdownsResultOutputReference;

new DataCloudflareZoneLockdownsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused">paused</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations"></a>

```java
public DataCloudflareZoneLockdownsResultConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused"></a>

```java
public IResolvable getPaused();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneLockdownsResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a>

---



