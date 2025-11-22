# `dataCloudflareTokenValidationRulesList` Submodule <a name="`dataCloudflareTokenValidationRulesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationRulesList <a name="DataCloudflareTokenValidationRulesList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesList;

DataCloudflareTokenValidationRulesList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .action(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .host(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .maxItems(java.lang.Number)
//  .ruleId(java.lang.String)
//  .tokenConfiguration(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.tokenConfiguration">tokenConfiguration</a></code> | <code>java.util.List<java.lang.String></code> | Select rules using any of these token configurations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#zone_id DataCloudflareTokenValidationRulesList#zone_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#action DataCloudflareTokenValidationRulesList#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#enabled DataCloudflareTokenValidationRulesList#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#host DataCloudflareTokenValidationRulesList#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#hostname DataCloudflareTokenValidationRulesList#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#id DataCloudflareTokenValidationRulesList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#max_items DataCloudflareTokenValidationRulesList#max_items}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.ruleId"></a>

- *Type:* java.lang.String

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#rule_id DataCloudflareTokenValidationRulesList#rule_id}

---

##### `tokenConfiguration`<sup>Optional</sup> <a name="tokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.tokenConfiguration"></a>

- *Type:* java.util.List<java.lang.String>

Select rules using any of these token configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#token_configuration DataCloudflareTokenValidationRulesList#token_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetTokenConfiguration">resetTokenConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetAction"></a>

```java
public void resetAction()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHost"></a>

```java
public void resetHost()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetId"></a>

```java
public void resetId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetRuleId"></a>

```java
public void resetRuleId()
```

##### `resetTokenConfiguration` <a name="resetTokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetTokenConfiguration"></a>

```java
public void resetTokenConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesList;

DataCloudflareTokenValidationRulesList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesList;

DataCloudflareTokenValidationRulesList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesList;

DataCloudflareTokenValidationRulesList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesList;

DataCloudflareTokenValidationRulesList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareTokenValidationRulesList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareTokenValidationRulesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareTokenValidationRulesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationRulesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList">DataCloudflareTokenValidationRulesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfigurationInput">tokenConfigurationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfiguration">tokenConfiguration</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.result"></a>

```java
public DataCloudflareTokenValidationRulesListResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList">DataCloudflareTokenValidationRulesListResultList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `tokenConfigurationInput`<sup>Optional</sup> <a name="tokenConfigurationInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfigurationInput"></a>

```java
public java.util.List<java.lang.String> getTokenConfigurationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `tokenConfiguration`<sup>Required</sup> <a name="tokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfiguration"></a>

```java
public java.util.List<java.lang.String> getTokenConfiguration();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationRulesListConfig <a name="DataCloudflareTokenValidationRulesListConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListConfig;

DataCloudflareTokenValidationRulesListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .action(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .host(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .maxItems(java.lang.Number)
//  .ruleId(java.lang.String)
//  .tokenConfiguration(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.action">action</a></code> | <code>java.lang.String</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.host">host</a></code> | <code>java.lang.String</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.tokenConfiguration">tokenConfiguration</a></code> | <code>java.util.List<java.lang.String></code> | Select rules using any of these token configurations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#zone_id DataCloudflareTokenValidationRulesList#zone_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#action DataCloudflareTokenValidationRulesList#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#enabled DataCloudflareTokenValidationRulesList#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#host DataCloudflareTokenValidationRulesList#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#hostname DataCloudflareTokenValidationRulesList#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#id DataCloudflareTokenValidationRulesList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#max_items DataCloudflareTokenValidationRulesList#max_items}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#rule_id DataCloudflareTokenValidationRulesList#rule_id}

---

##### `tokenConfiguration`<sup>Optional</sup> <a name="tokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.tokenConfiguration"></a>

```java
public java.util.List<java.lang.String> getTokenConfiguration();
```

- *Type:* java.util.List<java.lang.String>

Select rules using any of these token configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#token_configuration DataCloudflareTokenValidationRulesList#token_configuration}

---

### DataCloudflareTokenValidationRulesListResult <a name="DataCloudflareTokenValidationRulesListResult" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResult;

DataCloudflareTokenValidationRulesListResult.builder()
    .build();
```


### DataCloudflareTokenValidationRulesListResultSelector <a name="DataCloudflareTokenValidationRulesListResultSelector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelector;

DataCloudflareTokenValidationRulesListResultSelector.builder()
    .build();
```


### DataCloudflareTokenValidationRulesListResultSelectorExclude <a name="DataCloudflareTokenValidationRulesListResultSelectorExclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorExclude;

DataCloudflareTokenValidationRulesListResultSelectorExclude.builder()
    .build();
```


### DataCloudflareTokenValidationRulesListResultSelectorInclude <a name="DataCloudflareTokenValidationRulesListResultSelectorInclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorInclude;

DataCloudflareTokenValidationRulesListResultSelectorInclude.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationRulesListResultList <a name="DataCloudflareTokenValidationRulesListResultList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultList;

new DataCloudflareTokenValidationRulesListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get"></a>

```java
public DataCloudflareTokenValidationRulesListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareTokenValidationRulesListResultOutputReference <a name="DataCloudflareTokenValidationRulesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultOutputReference;

new DataCloudflareTokenValidationRulesListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference">DataCloudflareTokenValidationRulesListResultSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult">DataCloudflareTokenValidationRulesListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.selector"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorOutputReference getSelector();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference">DataCloudflareTokenValidationRulesListResultSelectorOutputReference</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareTokenValidationRulesListResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult">DataCloudflareTokenValidationRulesListResult</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorExcludeList <a name="DataCloudflareTokenValidationRulesListResultSelectorExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorExcludeList;

new DataCloudflareTokenValidationRulesListResultSelectorExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference;

new DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.operationIds">operationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude">DataCloudflareTokenValidationRulesListResultSelectorExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationIds`<sup>Required</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.operationIds"></a>

```java
public java.util.List<java.lang.String> getOperationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorExclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude">DataCloudflareTokenValidationRulesListResultSelectorExclude</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorIncludeList <a name="DataCloudflareTokenValidationRulesListResultSelectorIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorIncludeList;

new DataCloudflareTokenValidationRulesListResultSelectorIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference;

new DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude">DataCloudflareTokenValidationRulesListResultSelectorInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorInclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude">DataCloudflareTokenValidationRulesListResultSelectorInclude</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_token_validation_rules_list.DataCloudflareTokenValidationRulesListResultSelectorOutputReference;

new DataCloudflareTokenValidationRulesListResultSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList">DataCloudflareTokenValidationRulesListResultSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList">DataCloudflareTokenValidationRulesListResultSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector">DataCloudflareTokenValidationRulesListResultSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.exclude"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList">DataCloudflareTokenValidationRulesListResultSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.include"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelectorIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList">DataCloudflareTokenValidationRulesListResultSelectorIncludeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.internalValue"></a>

```java
public DataCloudflareTokenValidationRulesListResultSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector">DataCloudflareTokenValidationRulesListResultSelector</a>

---



