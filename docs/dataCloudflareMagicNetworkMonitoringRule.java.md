# `dataCloudflareMagicNetworkMonitoringRule` Submodule <a name="`dataCloudflareMagicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringRule <a name="DataCloudflareMagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRule;

DataCloudflareMagicNetworkMonitoringRule.Builder.create(Construct scope, java.lang.String id)
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
//  .ruleId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The id of the rule. Must be unique. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.ruleId"></a>

- *Type:* java.lang.String

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId">resetRuleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId"></a>

```java
public void resetRuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRule;

DataCloudflareMagicNetworkMonitoringRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRule;

DataCloudflareMagicNetworkMonitoringRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRule;

DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRule;

DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold">bandwidthThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold">packetThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes">prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity">zscoreSensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget">zscoreTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `automaticAdvertisement`<sup>Required</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```java
public IResolvable getAutomaticAdvertisement();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bandwidthThreshold`<sup>Required</sup> <a name="bandwidthThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```java
public java.lang.Number getBandwidthThreshold();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packetThreshold`<sup>Required</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold"></a>

```java
public java.lang.Number getPacketThreshold();
```

- *Type:* java.lang.Number

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes"></a>

```java
public java.util.List<java.lang.String> getPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zscoreSensitivity`<sup>Required</sup> <a name="zscoreSensitivity" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```java
public java.lang.String getZscoreSensitivity();
```

- *Type:* java.lang.String

---

##### `zscoreTarget`<sup>Required</sup> <a name="zscoreTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget"></a>

```java
public java.lang.String getZscoreTarget();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringRuleConfig <a name="DataCloudflareMagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_network_monitoring_rule.DataCloudflareMagicNetworkMonitoringRuleConfig;

DataCloudflareMagicNetworkMonitoringRuleConfig.builder()
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
//  .ruleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The id of the rule. Must be unique. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}

---



