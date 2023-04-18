# `cloudflare_waf_override`

Refer to the Terraform Registory for docs: [`cloudflare_waf_override`](https://www.terraform.io/docs/providers/cloudflare/r/waf_override).

# `wafOverride` Submodule <a name="`wafOverride` Submodule" id="@cdktf/provider-cloudflare.wafOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafOverride <a name="WafOverride" id="@cdktf/provider-cloudflare.wafOverride.WafOverride"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override cloudflare_waf_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waf_override.WafOverride;

WafOverride.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .urls(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
//  .description(java.lang.String)
//  .groups(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .priority(java.lang.Number)
//  .rewriteAction(java.util.Map<java.lang.String, java.lang.String>)
//  .rules(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.groups">groups</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rewriteAction">rewriteAction</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rules">rules</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.urls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.groups"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}.

---

##### `rewriteAction`<sup>Optional</sup> <a name="rewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rewriteAction"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rules"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction">resetRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId"></a>

```java
public void resetId()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRewriteAction` <a name="resetRewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction"></a>

```java
public void resetRewriteAction()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules"></a>

```java
public void resetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waf_override.WafOverride;

WafOverride.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waf_override.WafOverride;

WafOverride.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waf_override.WafOverride;

WafOverride.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId">overrideId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput">groupsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput">rewriteActionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput">rulesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput">urlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups">groups</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction">rewriteAction</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules">rules</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `overrideId`<sup>Required</sup> <a name="overrideId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId"></a>

```java
public java.lang.String getOverrideId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGroupsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rewriteActionInput`<sup>Optional</sup> <a name="rewriteActionInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRewriteActionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRulesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput"></a>

```java
public java.util.List<java.lang.String> getUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGroups();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `rewriteAction`<sup>Required</sup> <a name="rewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRewriteAction();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafOverrideConfig <a name="WafOverrideConfig" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waf_override.WafOverrideConfig;

WafOverrideConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .urls(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
//  .description(java.lang.String)
//  .groups(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .priority(java.lang.Number)
//  .rewriteAction(java.util.Map<java.lang.String, java.lang.String>)
//  .rules(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups">groups</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction">rewriteAction</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules">rules</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGroups();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}.

---

##### `rewriteAction`<sup>Optional</sup> <a name="rewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRewriteAction();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}.

---



