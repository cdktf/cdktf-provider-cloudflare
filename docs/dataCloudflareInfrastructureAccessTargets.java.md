# `dataCloudflareInfrastructureAccessTargets` Submodule <a name="`dataCloudflareInfrastructureAccessTargets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareInfrastructureAccessTargets <a name="DataCloudflareInfrastructureAccessTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets cloudflare_infrastructure_access_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargets;

DataCloudflareInfrastructureAccessTargets.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
//  .createdAfter(java.lang.String)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .ipv4(java.lang.String)
//  .ipv6(java.lang.String)
//  .modifiedAfter(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostnameContains"></a>

- *Type:* java.lang.String

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv4"></a>

- *Type:* java.lang.String

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv6"></a>

- *Type:* java.lang.String

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `modifiedAfter`<sup>Optional</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.modifiedAfter"></a>

- *Type:* java.lang.String

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter">resetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains"></a>

```java
public void resetHostnameContains()
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetModifiedAfter` <a name="resetModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter"></a>

```java
public void resetModifiedAfter()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargets;

DataCloudflareInfrastructureAccessTargets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargets;

DataCloudflareInfrastructureAccessTargets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargets;

DataCloudflareInfrastructureAccessTargets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargets;

DataCloudflareInfrastructureAccessTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareInfrastructureAccessTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareInfrastructureAccessTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareInfrastructureAccessTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareInfrastructureAccessTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input">ipv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput">modifiedAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsList getTargets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput"></a>

```java
public java.lang.String getHostnameContainsInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input"></a>

```java
public java.lang.String getIpv4Input();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `modifiedAfterInput`<sup>Optional</sup> <a name="modifiedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput"></a>

```java
public java.lang.String getModifiedAfterInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `modifiedAfter`<sup>Required</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter"></a>

```java
public java.lang.String getModifiedAfter();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareInfrastructureAccessTargetsConfig <a name="DataCloudflareInfrastructureAccessTargetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsConfig;

DataCloudflareInfrastructureAccessTargetsConfig.builder()
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
    .accountId(java.lang.String)
//  .createdAfter(java.lang.String)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .ipv4(java.lang.String)
//  .ipv6(java.lang.String)
//  .modifiedAfter(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `modifiedAfter`<sup>Optional</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter"></a>

```java
public java.lang.String getModifiedAfter();
```

- *Type:* java.lang.String

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargets <a name="DataCloudflareInfrastructureAccessTargetsTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargets;

DataCloudflareInfrastructureAccessTargetsTargets.builder()
    .ip(DataCloudflareInfrastructureAccessTargetsTargetsIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIp getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ip DataCloudflareInfrastructureAccessTargets#ip}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIp <a name="DataCloudflareInfrastructureAccessTargetsTargetsIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIp;

DataCloudflareInfrastructureAccessTargetsTargetsIp.builder()
//  .ipv4(DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4)
//  .ipv6(DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4;

DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6;

DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference;

new DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference;

new DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference;

new DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4"></a>

```java
public void putIpv4(DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6"></a>

```java
public void putIpv6(DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsList <a name="DataCloudflareInfrastructureAccessTargetsTargetsList" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsList;

new DataCloudflareInfrastructureAccessTargetsTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>>

---


### DataCloudflareInfrastructureAccessTargetsTargetsOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_infrastructure_access_targets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference;

new DataCloudflareInfrastructureAccessTargetsTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp">putIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp"></a>

```java
public void putIp(DataCloudflareInfrastructureAccessTargetsTargetsIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput">ipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargetsIp getIpInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue"></a>

```java
public DataCloudflareInfrastructureAccessTargetsTargets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>

---



