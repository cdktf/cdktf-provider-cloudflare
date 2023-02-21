# `ruleset` Submodule <a name="`ruleset` Submodule" id="@cdktf/provider-cloudflare.ruleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruleset <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.Ruleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.Ruleset;

Ruleset.Builder.create(Construct scope, java.lang.String id)
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
    .kind(java.lang.String)
    .name(java.lang.String)
    .phase(java.lang.String)
//  .accountId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<RulesetRules>)
//  .shareableEntitlementName(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.phase">phase</a></code> | <code>java.lang.String</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.shareableEntitlementName">shareableEntitlementName</a></code> | <code>java.lang.String</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.phase"></a>

- *Type:* java.lang.String

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `shareableEntitlementName`<sup>Optional</sup> <a name="shareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.shareableEntitlementName"></a>

- *Type:* java.lang.String

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName">resetShareableEntitlementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<RulesetRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetId"></a>

```java
public void resetId()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules"></a>

```java
public void resetRules()
```

##### `resetShareableEntitlementName` <a name="resetShareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName"></a>

```java
public void resetShareableEntitlementName()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.Ruleset;

Ruleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.Ruleset;

Ruleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.Ruleset;

Ruleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput">phaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput">shareableEntitlementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName">shareableEntitlementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules"></a>

```java
public RulesetRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput"></a>

```java
public java.lang.String getPhaseInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>>

---

##### `shareableEntitlementNameInput`<sup>Optional</sup> <a name="shareableEntitlementNameInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput"></a>

```java
public java.lang.String getShareableEntitlementNameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `shareableEntitlementName`<sup>Required</sup> <a name="shareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName"></a>

```java
public java.lang.String getShareableEntitlementName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetConfig <a name="RulesetConfig" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetConfig;

RulesetConfig.builder()
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
    .kind(java.lang.String)
    .name(java.lang.String)
    .phase(java.lang.String)
//  .accountId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<RulesetRules>)
//  .shareableEntitlementName(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase">phase</a></code> | <code>java.lang.String</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName">shareableEntitlementName</a></code> | <code>java.lang.String</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `shareableEntitlementName`<sup>Optional</sup> <a name="shareableEntitlementName" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName"></a>

```java
public java.lang.String getShareableEntitlementName();
```

- *Type:* java.lang.String

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

### RulesetRules <a name="RulesetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRules;

RulesetRules.builder()
    .expression(java.lang.String)
//  .action(java.lang.String)
//  .actionParameters(RulesetRulesActionParameters)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exposedCredentialCheck(RulesetRulesExposedCredentialCheck)
//  .lastUpdated(java.lang.String)
//  .logging(RulesetRulesLogging)
//  .ratelimit(RulesetRulesRatelimit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression">expression</a></code> | <code>java.lang.String</code> | Criteria for an HTTP request to trigger the ruleset rule action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action">action</a></code> | <code>java.lang.String</code> | Action to perform in the ruleset rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters">actionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | action_parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the ruleset rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck">exposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | exposed_credential_check block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | The most recent update to this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | ratelimit block. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Criteria for an HTTP request to trigger the ruleset rule action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to perform in the ruleset rule.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `actionParameters`<sup>Optional</sup> <a name="actionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters"></a>

```java
public RulesetRulesActionParameters getActionParameters();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

action_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action_parameters Ruleset#action_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Brief summary of the ruleset rule and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `exposedCredentialCheck`<sup>Optional</sup> <a name="exposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck"></a>

```java
public RulesetRulesExposedCredentialCheck getExposedCredentialCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

exposed_credential_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exposed_credential_check Ruleset#exposed_credential_check}

---

##### `lastUpdated`<sup>Optional</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

The most recent update to this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#last_updated Ruleset#last_updated}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging"></a>

```java
public RulesetRulesLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#logging Ruleset#logging}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit"></a>

```java
public RulesetRulesRatelimit getRatelimit();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

ratelimit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ratelimit Ruleset#ratelimit}

---

### RulesetRulesActionParameters <a name="RulesetRulesActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParameters;

RulesetRulesActionParameters.builder()
//  .automaticHttpsRewrites(java.lang.Boolean)
//  .automaticHttpsRewrites(IResolvable)
//  .autominify(IResolvable)
//  .autominify(java.util.List<RulesetRulesActionParametersAutominify>)
//  .bic(java.lang.Boolean)
//  .bic(IResolvable)
//  .browserTtl(RulesetRulesActionParametersBrowserTtl)
//  .cache(java.lang.Boolean)
//  .cache(IResolvable)
//  .cacheKey(RulesetRulesActionParametersCacheKey)
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .cookieFields(java.util.List<java.lang.String>)
//  .disableApps(java.lang.Boolean)
//  .disableApps(IResolvable)
//  .disableRailgun(java.lang.Boolean)
//  .disableRailgun(IResolvable)
//  .disableZaraz(java.lang.Boolean)
//  .disableZaraz(IResolvable)
//  .edgeTtl(RulesetRulesActionParametersEdgeTtl)
//  .emailObfuscation(java.lang.Boolean)
//  .emailObfuscation(IResolvable)
//  .fromList(RulesetRulesActionParametersFromList)
//  .fromValue(RulesetRulesActionParametersFromValue)
//  .headers(IResolvable)
//  .headers(java.util.List<RulesetRulesActionParametersHeaders>)
//  .hostHeader(java.lang.String)
//  .hotlinkProtection(java.lang.Boolean)
//  .hotlinkProtection(IResolvable)
//  .id(java.lang.String)
//  .increment(java.lang.Number)
//  .matchedData(RulesetRulesActionParametersMatchedData)
//  .mirage(java.lang.Boolean)
//  .mirage(IResolvable)
//  .opportunisticEncryption(java.lang.Boolean)
//  .opportunisticEncryption(IResolvable)
//  .origin(RulesetRulesActionParametersOrigin)
//  .originErrorPagePassthru(java.lang.Boolean)
//  .originErrorPagePassthru(IResolvable)
//  .overrides(RulesetRulesActionParametersOverrides)
//  .phases(java.util.List<java.lang.String>)
//  .polish(java.lang.String)
//  .products(java.util.List<java.lang.String>)
//  .requestFields(java.util.List<java.lang.String>)
//  .respectStrongEtags(java.lang.Boolean)
//  .respectStrongEtags(IResolvable)
//  .response(IResolvable)
//  .response(java.util.List<RulesetRulesActionParametersResponse>)
//  .responseFields(java.util.List<java.lang.String>)
//  .rocketLoader(java.lang.Boolean)
//  .rocketLoader(IResolvable)
//  .rules(java.util.Map<java.lang.String, java.lang.String>)
//  .ruleset(java.lang.String)
//  .rulesets(java.util.List<java.lang.String>)
//  .securityLevel(java.lang.String)
//  .serverSideExcludes(java.lang.Boolean)
//  .serverSideExcludes(IResolvable)
//  .serveStale(RulesetRulesActionParametersServeStale)
//  .sni(RulesetRulesActionParametersSni)
//  .ssl(java.lang.String)
//  .statusCode(java.lang.Number)
//  .sxg(java.lang.Boolean)
//  .sxg(IResolvable)
//  .uri(RulesetRulesActionParametersUri)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off Cloudflare Automatic HTTPS rewrites. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify">autominify</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>></code> | autominify block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic">bic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Inspect the visitor's browser for headers commonly associated with spammers and certain bots. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl">browserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | browser_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache">cache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to cache if expression matches. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey">cacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | cache_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content">content</a></code> | <code>java.lang.String</code> | Content of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields">cookieFields</a></code> | <code>java.util.List<java.lang.String></code> | List of cookie values to include as part of custom fields logging. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps">disableApps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn off all active Cloudflare Apps. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun">disableRailgun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn off railgun feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz">disableZaraz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn off zaraz feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl">edgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | edge_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation">emailObfuscation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList">fromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | from_list block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue">fromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | from_value block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | Host Header that request origin receives. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection">hotlinkProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off the hotlink protection feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id">id</a></code> | <code>java.lang.String</code> | Identifier of the action parameter to modify. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment">increment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData">matchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | matched_data block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage">mirage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off Cloudflare Mirage of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru">originErrorPagePassthru</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass-through error page for origin. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases">phases</a></code> | <code>java.util.List<java.lang.String></code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish">polish</a></code> | <code>java.lang.String</code> | Apply options from the Polish feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields">requestFields</a></code> | <code>java.util.List<java.lang.String></code> | List of request headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags">respectStrongEtags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Respect strong ETags. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response">response</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>></code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields">responseFields</a></code> | <code>java.util.List<java.lang.String></code> | List of response headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader">rocketLoader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules">rules</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | Which ruleset ID to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets">rulesets</a></code> | <code>java.util.List<java.lang.String></code> | List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | Control options for the Security Level feature from the Security app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes">serverSideExcludes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale">serveStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | serve_stale block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | sni block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl">ssl</a></code> | <code>java.lang.String</code> | Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | HTTP status code of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg">sxg</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn on or off the SXG feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | uri block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version">version</a></code> | <code>java.lang.String</code> | Version of the ruleset to deploy. |

---

##### `automaticHttpsRewrites`<sup>Optional</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites"></a>

```java
public java.lang.Object getAutomaticHttpsRewrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off Cloudflare Automatic HTTPS rewrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}

---

##### `autominify`<sup>Optional</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify"></a>

```java
public java.lang.Object getAutominify();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>>

autominify block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#autominify Ruleset#autominify}

---

##### `bic`<sup>Optional</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic"></a>

```java
public java.lang.Object getBic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Inspect the visitor's browser for headers commonly associated with spammers and certain bots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#bic Ruleset#bic}

---

##### `browserTtl`<sup>Optional</sup> <a name="browserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl"></a>

```java
public RulesetRulesActionParametersBrowserTtl getBrowserTtl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

browser_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache"></a>

```java
public java.lang.Object getCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to cache if expression matches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}

---

##### `cacheKey`<sup>Optional</sup> <a name="cacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey"></a>

```java
public RulesetRulesActionParametersCacheKey getCacheKey();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

cache_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Content of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content-Type of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `cookieFields`<sup>Optional</sup> <a name="cookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields"></a>

```java
public java.util.List<java.lang.String> getCookieFields();
```

- *Type:* java.util.List<java.lang.String>

List of cookie values to include as part of custom fields logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}

---

##### `disableApps`<sup>Optional</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps"></a>

```java
public java.lang.Object getDisableApps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn off all active Cloudflare Apps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_apps Ruleset#disable_apps}

---

##### `disableRailgun`<sup>Optional</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun"></a>

```java
public java.lang.Object getDisableRailgun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn off railgun feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_railgun Ruleset#disable_railgun}

---

##### `disableZaraz`<sup>Optional</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz"></a>

```java
public java.lang.Object getDisableZaraz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn off zaraz feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_zaraz Ruleset#disable_zaraz}

---

##### `edgeTtl`<sup>Optional</sup> <a name="edgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl"></a>

```java
public RulesetRulesActionParametersEdgeTtl getEdgeTtl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

edge_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}

---

##### `emailObfuscation`<sup>Optional</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation"></a>

```java
public java.lang.Object getEmailObfuscation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#email_obfuscation Ruleset#email_obfuscation}

---

##### `fromList`<sup>Optional</sup> <a name="fromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList"></a>

```java
public RulesetRulesActionParametersFromList getFromList();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

from_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}

---

##### `fromValue`<sup>Optional</sup> <a name="fromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue"></a>

```java
public RulesetRulesActionParametersFromValue getFromValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

from_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

Host Header that request origin receives.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}

---

##### `hotlinkProtection`<sup>Optional</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection"></a>

```java
public java.lang.Object getHotlinkProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off the hotlink protection feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#hotlink_protection Ruleset#hotlink_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Identifier of the action parameter to modify.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `increment`<sup>Optional</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment"></a>

```java
public java.lang.Number getIncrement();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}.

---

##### `matchedData`<sup>Optional</sup> <a name="matchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData"></a>

```java
public RulesetRulesActionParametersMatchedData getMatchedData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

matched_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage"></a>

```java
public java.lang.Object getMirage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off Cloudflare Mirage of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mirage Ruleset#mirage}

---

##### `opportunisticEncryption`<sup>Optional</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption"></a>

```java
public java.lang.Object getOpportunisticEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin"></a>

```java
public RulesetRulesActionParametersOrigin getOrigin();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}

---

##### `originErrorPagePassthru`<sup>Optional</sup> <a name="originErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru"></a>

```java
public java.lang.Object getOriginErrorPagePassthru();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass-through error page for origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides"></a>

```java
public RulesetRulesActionParametersOverrides getOverrides();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}

---

##### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases"></a>

```java
public java.util.List<java.lang.String> getPhases();
```

- *Type:* java.util.List<java.lang.String>

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish"></a>

```java
public java.lang.String getPolish();
```

- *Type:* java.lang.String

Apply options from the Polish feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#polish Ruleset#polish}

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}

---

##### `requestFields`<sup>Optional</sup> <a name="requestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields"></a>

```java
public java.util.List<java.lang.String> getRequestFields();
```

- *Type:* java.util.List<java.lang.String>

List of request headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}

---

##### `respectStrongEtags`<sup>Optional</sup> <a name="respectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags"></a>

```java
public java.lang.Object getRespectStrongEtags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Respect strong ETags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response"></a>

```java
public java.lang.Object getResponse();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>>

response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}

---

##### `responseFields`<sup>Optional</sup> <a name="responseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields"></a>

```java
public java.util.List<java.lang.String> getResponseFields();
```

- *Type:* java.util.List<java.lang.String>

List of response headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}

---

##### `rocketLoader`<sup>Optional</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader"></a>

```java
public java.lang.Object getRocketLoader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rocket_loader Ruleset#rocket_loader}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs.

Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

Which ruleset ID to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}

---

##### `rulesets`<sup>Optional</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets"></a>

```java
public java.util.List<java.lang.String> getRulesets();
```

- *Type:* java.util.List<java.lang.String>

List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

Control options for the Security Level feature from the Security app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#security_level Ruleset#security_level}

---

##### `serverSideExcludes`<sup>Optional</sup> <a name="serverSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes"></a>

```java
public java.lang.Object getServerSideExcludes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#server_side_excludes Ruleset#server_side_excludes}

---

##### `serveStale`<sup>Optional</sup> <a name="serveStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale"></a>

```java
public RulesetRulesActionParametersServeStale getServeStale();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

serve_stale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni"></a>

```java
public RulesetRulesActionParametersSni getSni();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

sni block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sni Ruleset#sni}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl"></a>

```java
public java.lang.String getSsl();
```

- *Type:* java.lang.String

Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ssl Ruleset#ssl}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

HTTP status code of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `sxg`<sup>Optional</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg"></a>

```java
public java.lang.Object getSxg();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn on or off the SXG feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sxg Ruleset#sxg}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri"></a>

```java
public RulesetRulesActionParametersUri getUri();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

uri block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the ruleset to deploy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}

---

### RulesetRulesActionParametersAutominify <a name="RulesetRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersAutominify;

RulesetRulesActionParametersAutominify.builder()
//  .css(java.lang.Boolean)
//  .css(IResolvable)
//  .html(java.lang.Boolean)
//  .html(IResolvable)
//  .js(java.lang.Boolean)
//  .js(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css">css</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | SSL minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html">html</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | HTML minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js">js</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | JS minification. |

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css"></a>

```java
public java.lang.Object getCss();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

SSL minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#css Ruleset#css}

---

##### `html`<sup>Optional</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html"></a>

```java
public java.lang.Object getHtml();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

HTML minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#html Ruleset#html}

---

##### `js`<sup>Optional</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js"></a>

```java
public java.lang.Object getJs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

JS minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#js Ruleset#js}

---

### RulesetRulesActionParametersBrowserTtl <a name="RulesetRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl;

RulesetRulesActionParametersBrowserTtl.builder()
    .mode(java.lang.String)
//  .default(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode">mode</a></code> | <code>java.lang.String</code> | Mode of the browser TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default">default</a></code> | <code>java.lang.Number</code> | Default browser TTL. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Mode of the browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default"></a>

```java
public java.lang.Number getDefault();
```

- *Type:* java.lang.Number

Default browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

### RulesetRulesActionParametersCacheKey <a name="RulesetRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKey;

RulesetRulesActionParametersCacheKey.builder()
//  .cacheByDeviceType(java.lang.Boolean)
//  .cacheByDeviceType(IResolvable)
//  .cacheDeceptionArmor(java.lang.Boolean)
//  .cacheDeceptionArmor(IResolvable)
//  .customKey(RulesetRulesActionParametersCacheKeyCustomKey)
//  .ignoreQueryStringsOrder(java.lang.Boolean)
//  .ignoreQueryStringsOrder(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Cache by device type. Conflicts with "custom_key.user.device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Cache deception armor. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey">customKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | custom_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder">ignoreQueryStringsOrder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore query strings order. |

---

##### `cacheByDeviceType`<sup>Optional</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType"></a>

```java
public java.lang.Object getCacheByDeviceType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Cache by device type. Conflicts with "custom_key.user.device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}

---

##### `cacheDeceptionArmor`<sup>Optional</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor"></a>

```java
public java.lang.Object getCacheDeceptionArmor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Cache deception armor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}

---

##### `customKey`<sup>Optional</sup> <a name="customKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKey getCustomKey();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

custom_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}

---

##### `ignoreQueryStringsOrder`<sup>Optional</sup> <a name="ignoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder"></a>

```java
public java.lang.Object getIgnoreQueryStringsOrder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore query strings order.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}

---

### RulesetRulesActionParametersCacheKeyCustomKey <a name="RulesetRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey;

RulesetRulesActionParametersCacheKeyCustomKey.builder()
//  .cookie(RulesetRulesActionParametersCacheKeyCustomKeyCookie)
//  .header(RulesetRulesActionParametersCacheKeyCustomKeyHeader)
//  .host(RulesetRulesActionParametersCacheKeyCustomKeyHost)
//  .queryString(RulesetRulesActionParametersCacheKeyCustomKeyQueryString)
//  .user(RulesetRulesActionParametersCacheKeyCustomKeyUser)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | user block. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyCookie getCookie();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHeader getHeader();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHost getHost();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

host block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyQueryString getQueryString();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyUser getUser();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}

---

### RulesetRulesActionParametersCacheKeyCustomKeyCookie <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie;

RulesetRulesActionParametersCacheKeyCustomKeyCookie.builder()
//  .checkPresence(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence">checkPresence</a></code> | <code>java.util.List<java.lang.String></code> | List of cookies to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | List of cookies to include in the custom key. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence"></a>

```java
public java.util.List<java.lang.String> getCheckPresence();
```

- *Type:* java.util.List<java.lang.String>

List of cookies to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

List of cookies to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHeader <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader;

RulesetRulesActionParametersCacheKeyCustomKeyHeader.builder()
//  .checkPresence(java.util.List<java.lang.String>)
//  .excludeOrigin(java.lang.Boolean)
//  .excludeOrigin(IResolvable)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence">checkPresence</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin">excludeOrigin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Exclude the origin header from the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to include in the custom key. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence"></a>

```java
public java.util.List<java.lang.String> getCheckPresence();
```

- *Type:* java.util.List<java.lang.String>

List of headers to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `excludeOrigin`<sup>Optional</sup> <a name="excludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin"></a>

```java
public java.lang.Object getExcludeOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Exclude the origin header from the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

List of headers to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHost <a name="RulesetRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost;

RulesetRulesActionParametersCacheKeyCustomKeyHost.builder()
//  .resolved(java.lang.Boolean)
//  .resolved(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved">resolved</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Resolve hostname to IP address. |

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved"></a>

```java
public java.lang.Object getResolved();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Resolve hostname to IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}

---

### RulesetRulesActionParametersCacheKeyCustomKeyQueryString <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString;

RulesetRulesActionParametersCacheKeyCustomKeyQueryString.builder()
//  .exclude(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | List of query string parameters to exclude from the custom key. Conflicts with "include". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | List of query string parameters to include in the custom key. Conflicts with "exclude". |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

List of query string parameters to exclude from the custom key. Conflicts with "include".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

List of query string parameters to include in the custom key. Conflicts with "exclude".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyUser <a name="RulesetRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser;

RulesetRulesActionParametersCacheKeyCustomKeyUser.builder()
//  .deviceType(java.lang.Boolean)
//  .deviceType(IResolvable)
//  .geo(java.lang.Boolean)
//  .geo(IResolvable)
//  .lang(java.lang.Boolean)
//  .lang(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType">deviceType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo">geo</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Add geo data to the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang">lang</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Add language data to the custom key. |

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType"></a>

```java
public java.lang.Object getDeviceType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo"></a>

```java
public java.lang.Object getGeo();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Add geo data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang"></a>

```java
public java.lang.Object getLang();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Add language data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}

---

### RulesetRulesActionParametersEdgeTtl <a name="RulesetRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl;

RulesetRulesActionParametersEdgeTtl.builder()
    .mode(java.lang.String)
//  .default(java.lang.Number)
//  .statusCodeTtl(IResolvable)
//  .statusCodeTtl(java.util.List<RulesetRulesActionParametersEdgeTtlStatusCodeTtl>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode">mode</a></code> | <code>java.lang.String</code> | Mode of the edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default">default</a></code> | <code>java.lang.Number</code> | Default edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl">statusCodeTtl</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>></code> | status_code_ttl block. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Mode of the edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default"></a>

```java
public java.lang.Number getDefault();
```

- *Type:* java.lang.Number

Default edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

##### `statusCodeTtl`<sup>Optional</sup> <a name="statusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl"></a>

```java
public java.lang.Object getStatusCodeTtl();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>>

status_code_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtl <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl;

RulesetRulesActionParametersEdgeTtlStatusCodeTtl.builder()
    .value(java.lang.Number)
//  .statusCode(java.lang.Number)
//  .statusCodeRange(IResolvable)
//  .statusCodeRange(java.util.List<RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value">value</a></code> | <code>java.lang.Number</code> | Status code edge TTL value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | Status code for which the edge TTL is applied. Conflicts with "status_code_range". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange">statusCodeRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>></code> | status_code_range block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Status code edge TTL value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

Status code for which the edge TTL is applied. Conflicts with "status_code_range".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `statusCodeRange`<sup>Optional</sup> <a name="statusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange"></a>

```java
public java.lang.Object getStatusCodeRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>>

status_code_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_range Ruleset#status_code_range}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange;

RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.builder()
//  .from(java.lang.Number)
//  .to(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from">from</a></code> | <code>java.lang.Number</code> | From status code. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to">to</a></code> | <code>java.lang.Number</code> | To status code. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

From status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from Ruleset#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to"></a>

```java
public java.lang.Number getTo();
```

- *Type:* java.lang.Number

To status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#to Ruleset#to}

---

### RulesetRulesActionParametersFromList <a name="RulesetRulesActionParametersFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromList;

RulesetRulesActionParametersFromList.builder()
    .key(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key">key</a></code> | <code>java.lang.String</code> | Expression to use for the list lookup. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name">name</a></code> | <code>java.lang.String</code> | Name of the list. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Expression to use for the list lookup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

### RulesetRulesActionParametersFromValue <a name="RulesetRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromValue;

RulesetRulesActionParametersFromValue.builder()
//  .preserveQueryString(java.lang.Boolean)
//  .preserveQueryString(IResolvable)
//  .statusCode(java.lang.Number)
//  .targetUrl(RulesetRulesActionParametersFromValueTargetUrl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString">preserveQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Preserve query string for redirect URL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | Status code for redirect. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl">targetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | target_url block. |

---

##### `preserveQueryString`<sup>Optional</sup> <a name="preserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString"></a>

```java
public java.lang.Object getPreserveQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Preserve query string for redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

Status code for redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl"></a>

```java
public RulesetRulesActionParametersFromValueTargetUrl getTargetUrl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

target_url block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}

---

### RulesetRulesActionParametersFromValueTargetUrl <a name="RulesetRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl;

RulesetRulesActionParametersFromValueTargetUrl.builder()
//  .expression(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression">expression</a></code> | <code>java.lang.String</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value">value</a></code> | <code>java.lang.String</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersHeaders <a name="RulesetRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersHeaders;

RulesetRulesActionParametersHeaders.builder()
//  .expression(java.lang.String)
//  .name(java.lang.String)
//  .operation(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression">expression</a></code> | <code>java.lang.String</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Name of the HTTP request header to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation">operation</a></code> | <code>java.lang.String</code> | Action to perform on the HTTP request header. Available values: `remove`, `set`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the HTTP request header to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Action to perform on the HTTP request header. Available values: `remove`, `set`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersMatchedData <a name="RulesetRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersMatchedData;

RulesetRulesActionParametersMatchedData.builder()
//  .publicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Public key to use within WAF Ruleset payload logging to view the HTTP request parameters. |

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Public key to use within WAF Ruleset payload logging to view the HTTP request parameters.

You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}

---

### RulesetRulesActionParametersOrigin <a name="RulesetRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOrigin;

RulesetRulesActionParametersOrigin.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host">host</a></code> | <code>java.lang.String</code> | Origin Hostname where request is sent. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port">port</a></code> | <code>java.lang.Number</code> | Origin Port where request is sent. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Origin Hostname where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Origin Port where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}

---

### RulesetRulesActionParametersOverrides <a name="RulesetRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverrides;

RulesetRulesActionParametersOverrides.builder()
//  .action(java.lang.String)
//  .categories(IResolvable)
//  .categories(java.util.List<RulesetRulesActionParametersOverridesCategories>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .rules(IResolvable)
//  .rules(java.util.List<RulesetRulesActionParametersOverridesRules>)
//  .sensitivityLevel(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action">action</a></code> | <code>java.lang.String</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories">categories</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>></code> | categories block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines if the current ruleset-level override enables or disables the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel">sensitivityLevel</a></code> | <code>java.lang.String</code> | Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status">status</a></code> | <code>java.lang.String</code> | Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories"></a>

```java
public java.lang.Object getCategories();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>>

categories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines if the current ruleset-level override enables or disables the ruleset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `sensitivityLevel`<sup>Optional</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel"></a>

```java
public java.lang.String getSensitivityLevel();
```

- *Type:* java.lang.String

Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesCategories <a name="RulesetRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories;

RulesetRulesActionParametersOverridesCategories.builder()
//  .action(java.lang.String)
//  .category(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action">action</a></code> | <code>java.lang.String</code> | Action to perform in the tag-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category">category</a></code> | <code>java.lang.String</code> | Tag name to apply the ruleset rule override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status">status</a></code> | <code>java.lang.String</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to perform in the tag-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Tag name to apply the ruleset rule override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesRules <a name="RulesetRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesRules;

RulesetRulesActionParametersOverridesRules.builder()
//  .action(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .scoreThreshold(java.lang.Number)
//  .sensitivityLevel(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action">action</a></code> | <code>java.lang.String</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines if the current rule-level override enables or disables the rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id">id</a></code> | <code>java.lang.String</code> | Rule ID to apply the override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold">scoreThreshold</a></code> | <code>java.lang.Number</code> | Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel">sensitivityLevel</a></code> | <code>java.lang.String</code> | Sensitivity level for a ruleset rule override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status">status</a></code> | <code>java.lang.String</code> | Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines if the current rule-level override enables or disables the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Rule ID to apply the override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scoreThreshold`<sup>Optional</sup> <a name="scoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold"></a>

```java
public java.lang.Number getScoreThreshold();
```

- *Type:* java.lang.Number

Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}

---

##### `sensitivityLevel`<sup>Optional</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel"></a>

```java
public java.lang.String getSensitivityLevel();
```

- *Type:* java.lang.String

Sensitivity level for a ruleset rule override.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersResponse <a name="RulesetRulesActionParametersResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersResponse;

RulesetRulesActionParametersResponse.builder()
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .statusCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content">content</a></code> | <code>java.lang.String</code> | Body content to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | HTTP content type to send in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | HTTP status code to send in the response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Body content to include in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

HTTP content type to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

HTTP status code to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

### RulesetRulesActionParametersServeStale <a name="RulesetRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersServeStale;

RulesetRulesActionParametersServeStale.builder()
//  .disableStaleWhileUpdating(java.lang.Boolean)
//  .disableStaleWhileUpdating(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating">disableStaleWhileUpdating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable stale while updating. |

---

##### `disableStaleWhileUpdating`<sup>Optional</sup> <a name="disableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating"></a>

```java
public java.lang.Object getDisableStaleWhileUpdating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable stale while updating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}

---

### RulesetRulesActionParametersSni <a name="RulesetRulesActionParametersSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersSni;

RulesetRulesActionParametersSni.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value">value</a></code> | <code>java.lang.String</code> | Value to define for SNI. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value to define for SNI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUri <a name="RulesetRulesActionParametersUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUri;

RulesetRulesActionParametersUri.builder()
//  .origin(java.lang.Boolean)
//  .origin(IResolvable)
//  .path(RulesetRulesActionParametersUriPath)
//  .query(RulesetRulesActionParametersUriQuery)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin">origin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | query block. |

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin"></a>

```java
public java.lang.Object getOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path"></a>

```java
public RulesetRulesActionParametersUriPath getPath();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query"></a>

```java
public RulesetRulesActionParametersUriQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}

---

### RulesetRulesActionParametersUriPath <a name="RulesetRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUriPath;

RulesetRulesActionParametersUriPath.builder()
//  .expression(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression">expression</a></code> | <code>java.lang.String</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value">value</a></code> | <code>java.lang.String</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUriQuery <a name="RulesetRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUriQuery;

RulesetRulesActionParametersUriQuery.builder()
//  .expression(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression">expression</a></code> | <code>java.lang.String</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value">value</a></code> | <code>java.lang.String</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesExposedCredentialCheck <a name="RulesetRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesExposedCredentialCheck;

RulesetRulesExposedCredentialCheck.builder()
//  .passwordExpression(java.lang.String)
//  .usernameExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression">passwordExpression</a></code> | <code>java.lang.String</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression">usernameExpression</a></code> | <code>java.lang.String</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. |

---

##### `passwordExpression`<sup>Optional</sup> <a name="passwordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression"></a>

```java
public java.lang.String getPasswordExpression();
```

- *Type:* java.lang.String

Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}

---

##### `usernameExpression`<sup>Optional</sup> <a name="usernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression"></a>

```java
public java.lang.String getUsernameExpression();
```

- *Type:* java.lang.String

Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}

---

### RulesetRulesLogging <a name="RulesetRulesLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesLogging;

RulesetRulesLogging.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Override the default logging behavior when a rule is matched. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status">status</a></code> | <code>java.lang.String</code> | Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Override the default logging behavior when a rule is matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesRatelimit <a name="RulesetRulesRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesRatelimit;

RulesetRulesRatelimit.builder()
//  .characteristics(java.util.List<java.lang.String>)
//  .countingExpression(java.lang.String)
//  .mitigationTimeout(java.lang.Number)
//  .period(java.lang.Number)
//  .requestsPerPeriod(java.lang.Number)
//  .requestsToOrigin(java.lang.Boolean)
//  .requestsToOrigin(IResolvable)
//  .scorePerPeriod(java.lang.Number)
//  .scoreResponseHeaderName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics">characteristics</a></code> | <code>java.util.List<java.lang.String></code> | List of parameters that define how Cloudflare tracks the request rate for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression">countingExpression</a></code> | <code>java.lang.String</code> | Criteria for counting HTTP requests to trigger the Rate Limiting action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout">mitigationTimeout</a></code> | <code>java.lang.Number</code> | Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period">period</a></code> | <code>java.lang.Number</code> | The period of time to consider (in seconds) when evaluating the request rate. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod">requestsPerPeriod</a></code> | <code>java.lang.Number</code> | The number of requests over the period of time that will trigger the Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin">requestsToOrigin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to include requests to origin within the Rate Limiting count. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod">scorePerPeriod</a></code> | <code>java.lang.Number</code> | The maximum aggregate score over the period of time that will trigger Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName">scoreResponseHeaderName</a></code> | <code>java.lang.String</code> | Name of HTTP header in the response, set by the origin server, with the score for the current request. |

---

##### `characteristics`<sup>Optional</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics"></a>

```java
public java.util.List<java.lang.String> getCharacteristics();
```

- *Type:* java.util.List<java.lang.String>

List of parameters that define how Cloudflare tracks the request rate for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}

---

##### `countingExpression`<sup>Optional</sup> <a name="countingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression"></a>

```java
public java.lang.String getCountingExpression();
```

- *Type:* java.lang.String

Criteria for counting HTTP requests to trigger the Rate Limiting action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}

---

##### `mitigationTimeout`<sup>Optional</sup> <a name="mitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout"></a>

```java
public java.lang.Number getMitigationTimeout();
```

- *Type:* java.lang.Number

Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The period of time to consider (in seconds) when evaluating the request rate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}

---

##### `requestsPerPeriod`<sup>Optional</sup> <a name="requestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod"></a>

```java
public java.lang.Number getRequestsPerPeriod();
```

- *Type:* java.lang.Number

The number of requests over the period of time that will trigger the Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}

---

##### `requestsToOrigin`<sup>Optional</sup> <a name="requestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin"></a>

```java
public java.lang.Object getRequestsToOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to include requests to origin within the Rate Limiting count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}

---

##### `scorePerPeriod`<sup>Optional</sup> <a name="scorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod"></a>

```java
public java.lang.Number getScorePerPeriod();
```

- *Type:* java.lang.Number

The maximum aggregate score over the period of time that will trigger Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_per_period Ruleset#score_per_period}

---

##### `scoreResponseHeaderName`<sup>Optional</sup> <a name="scoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName"></a>

```java
public java.lang.String getScoreResponseHeaderName();
```

- *Type:* java.lang.String

Name of HTTP header in the response, set by the origin server, with the score for the current request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_response_header_name Ruleset#score_response_header_name}

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRulesActionParametersAutominifyList <a name="RulesetRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersAutominifyList;

new RulesetRulesActionParametersAutominifyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get"></a>

```java
public RulesetRulesActionParametersAutominifyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>>

---


### RulesetRulesActionParametersAutominifyOutputReference <a name="RulesetRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference;

new RulesetRulesActionParametersAutominifyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss">resetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml">resetHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs">resetJs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCss` <a name="resetCss" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss"></a>

```java
public void resetCss()
```

##### `resetHtml` <a name="resetHtml" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml"></a>

```java
public void resetHtml()
```

##### `resetJs` <a name="resetJs" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs"></a>

```java
public void resetJs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput">cssInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput">htmlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput">jsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css">css</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html">html</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js">js</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput"></a>

```java
public java.lang.Object getCssInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput"></a>

```java
public java.lang.Object getHtmlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsInput`<sup>Optional</sup> <a name="jsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput"></a>

```java
public java.lang.Object getJsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css"></a>

```java
public java.lang.Object getCss();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html"></a>

```java
public java.lang.Object getHtml();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js"></a>

```java
public java.lang.Object getJs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersBrowserTtlOutputReference <a name="RulesetRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference;

new RulesetRulesActionParametersBrowserTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default">default</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput"></a>

```java
public java.lang.Number getDefaultInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```java
public java.lang.Number getDefault();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersBrowserTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence"></a>

```java
public void resetCheckPresence()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">checkPresence</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput"></a>

```java
public java.util.List<java.lang.String> getCheckPresenceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```java
public java.util.List<java.lang.String> getCheckPresence();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin">resetExcludeOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence"></a>

```java
public void resetCheckPresence()
```

##### `resetExcludeOrigin` <a name="resetExcludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin"></a>

```java
public void resetExcludeOrigin()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput">excludeOriginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">checkPresence</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">excludeOrigin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput"></a>

```java
public java.util.List<java.lang.String> getCheckPresenceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeOriginInput`<sup>Optional</sup> <a name="excludeOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput"></a>

```java
public java.lang.Object getExcludeOriginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```java
public java.util.List<java.lang.String> getCheckPresence();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeOrigin`<sup>Required</sup> <a name="excludeOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```java
public java.lang.Object getExcludeOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHeader getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved">resetResolved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResolved` <a name="resetResolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved"></a>

```java
public void resetResolved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput">resolvedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">resolved</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resolvedInput`<sup>Optional</sup> <a name="resolvedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput"></a>

```java
public java.lang.Object getResolvedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```java
public java.lang.Object getResolved();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHost getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie">putCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie">resetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookie` <a name="putCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie"></a>

```java
public void putCookie(RulesetRulesActionParametersCacheKeyCustomKeyCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader"></a>

```java
public void putHeader(RulesetRulesActionParametersCacheKeyCustomKeyHeader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost"></a>

```java
public void putHost(RulesetRulesActionParametersCacheKeyCustomKeyHost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString"></a>

```java
public void putQueryString(RulesetRulesActionParametersCacheKeyCustomKeyQueryString value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser"></a>

```java
public void putUser(RulesetRulesActionParametersCacheKeyCustomKeyUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `resetCookie` <a name="resetCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie"></a>

```java
public void resetCookie()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput">cookieInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput">hostInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput">queryStringInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference getCookie();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference getHost();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference getQueryString();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference getUser();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a>

---

##### `cookieInput`<sup>Optional</sup> <a name="cookieInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyCookie getCookieInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHeader getHeaderInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyHost getHostInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyQueryString getQueryStringInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyUser getUserInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyQueryString getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;

new RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType"></a>

```java
public void resetDeviceType()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetLang` <a name="resetLang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang"></a>

```java
public void resetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput">geoInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput">langInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">deviceType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">geo</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">lang</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput"></a>

```java
public java.lang.Object getDeviceTypeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput"></a>

```java
public java.lang.Object getGeoInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput"></a>

```java
public java.lang.Object getLangInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```java
public java.lang.Object getDeviceType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```java
public java.lang.Object getGeo();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```java
public java.lang.Object getLang();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyUser getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---


### RulesetRulesActionParametersCacheKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference;

new RulesetRulesActionParametersCacheKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey">putCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType">resetCacheByDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor">resetCacheDeceptionArmor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey">resetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder">resetIgnoreQueryStringsOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomKey` <a name="putCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey"></a>

```java
public void putCustomKey(RulesetRulesActionParametersCacheKeyCustomKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `resetCacheByDeviceType` <a name="resetCacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType"></a>

```java
public void resetCacheByDeviceType()
```

##### `resetCacheDeceptionArmor` <a name="resetCacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor"></a>

```java
public void resetCacheDeceptionArmor()
```

##### `resetCustomKey` <a name="resetCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey"></a>

```java
public void resetCustomKey()
```

##### `resetIgnoreQueryStringsOrder` <a name="resetIgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder"></a>

```java
public void resetIgnoreQueryStringsOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey">customKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput">cacheByDeviceTypeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput">cacheDeceptionArmorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput">customKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput">ignoreQueryStringsOrderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">ignoreQueryStringsOrder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKeyOutputReference getCustomKey();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a>

---

##### `cacheByDeviceTypeInput`<sup>Optional</sup> <a name="cacheByDeviceTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput"></a>

```java
public java.lang.Object getCacheByDeviceTypeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheDeceptionArmorInput`<sup>Optional</sup> <a name="cacheDeceptionArmorInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput"></a>

```java
public java.lang.Object getCacheDeceptionArmorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput"></a>

```java
public RulesetRulesActionParametersCacheKeyCustomKey getCustomKeyInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `ignoreQueryStringsOrderInput`<sup>Optional</sup> <a name="ignoreQueryStringsOrderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput"></a>

```java
public java.lang.Object getIgnoreQueryStringsOrderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheByDeviceType`<sup>Required</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```java
public java.lang.Object getCacheByDeviceType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheDeceptionArmor`<sup>Required</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```java
public java.lang.Object getCacheDeceptionArmor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreQueryStringsOrder`<sup>Required</sup> <a name="ignoreQueryStringsOrder" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```java
public java.lang.Object getIgnoreQueryStringsOrder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersCacheKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---


### RulesetRulesActionParametersEdgeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference;

new RulesetRulesActionParametersEdgeTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl">putStatusCodeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl">resetStatusCodeTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatusCodeTtl` <a name="putStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl"></a>

```java
public void putStatusCodeTtl(IResolvable OR java.util.List<RulesetRulesActionParametersEdgeTtlStatusCodeTtl> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>>

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetStatusCodeTtl` <a name="resetStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl"></a>

```java
public void resetStatusCodeTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">statusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput">statusCodeTtlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default">default</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusCodeTtl`<sup>Required</sup> <a name="statusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```java
public RulesetRulesActionParametersEdgeTtlStatusCodeTtlList getStatusCodeTtl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput"></a>

```java
public java.lang.Number getDefaultInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `statusCodeTtlInput`<sup>Optional</sup> <a name="statusCodeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput"></a>

```java
public java.lang.Object getStatusCodeTtlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```java
public java.lang.Number getDefault();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersEdgeTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList;

new RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```java
public RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;

new RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange">putStatusCodeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange">resetStatusCodeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatusCodeRange` <a name="putStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange"></a>

```java
public void putStatusCodeRange(IResolvable OR java.util.List<RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>>

---

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```

##### `resetStatusCodeRange` <a name="resetStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange"></a>

```java
public void resetStatusCodeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput">statusCodeRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```java
public RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList getStatusCodeRange();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `statusCodeRangeInput`<sup>Optional</sup> <a name="statusCodeRangeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput"></a>

```java
public java.lang.Object getStatusCodeRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList;

new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```java
public RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;

new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput">toInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">from</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">to</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput"></a>

```java
public java.lang.Number getFromInput();
```

- *Type:* java.lang.Number

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput"></a>

```java
public java.lang.Number getToInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```java
public java.lang.Number getTo();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersFromListOutputReference <a name="RulesetRulesActionParametersFromListOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference;

new RulesetRulesActionParametersFromListOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersFromList getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---


### RulesetRulesActionParametersFromValueOutputReference <a name="RulesetRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference;

new RulesetRulesActionParametersFromValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl">putTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString">resetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetUrl` <a name="putTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl"></a>

```java
public void putTargetUrl(RulesetRulesActionParametersFromValueTargetUrl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `resetPreserveQueryString` <a name="resetPreserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString"></a>

```java
public void resetPreserveQueryString()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl"></a>

```java
public void resetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl">targetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput">preserveQueryStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString">preserveQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```java
public RulesetRulesActionParametersFromValueTargetUrlOutputReference getTargetUrl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a>

---

##### `preserveQueryStringInput`<sup>Optional</sup> <a name="preserveQueryStringInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput"></a>

```java
public java.lang.Object getPreserveQueryStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput"></a>

```java
public RulesetRulesActionParametersFromValueTargetUrl getTargetUrlInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `preserveQueryString`<sup>Required</sup> <a name="preserveQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```java
public java.lang.Object getPreserveQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersFromValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---


### RulesetRulesActionParametersFromValueTargetUrlOutputReference <a name="RulesetRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference;

new RulesetRulesActionParametersFromValueTargetUrlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersFromValueTargetUrl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---


### RulesetRulesActionParametersHeadersList <a name="RulesetRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersHeadersList;

new RulesetRulesActionParametersHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get"></a>

```java
public RulesetRulesActionParametersHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>>

---


### RulesetRulesActionParametersHeadersOutputReference <a name="RulesetRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference;

new RulesetRulesActionParametersHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersMatchedDataOutputReference <a name="RulesetRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference;

new RulesetRulesActionParametersMatchedDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey"></a>

```java
public void resetPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersMatchedData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---


### RulesetRulesActionParametersOriginOutputReference <a name="RulesetRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference;

new RulesetRulesActionParametersOriginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersOrigin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---


### RulesetRulesActionParametersOutputReference <a name="RulesetRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOutputReference;

new RulesetRulesActionParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify">putAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl">putBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey">putCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl">putEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList">putFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue">putFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData">putMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale">putServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni">putSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri">putUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites">resetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify">resetAutominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic">resetBic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl">resetBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey">resetCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields">resetCookieFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps">resetDisableApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun">resetDisableRailgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz">resetDisableZaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl">resetEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation">resetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList">resetFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue">resetFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection">resetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement">resetIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData">resetMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage">resetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption">resetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru">resetOriginErrorPagePassthru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases">resetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish">resetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts">resetProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields">resetRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags">resetRespectStrongEtags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields">resetResponseFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader">resetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset">resetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets">resetRulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes">resetServerSideExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale">resetServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni">resetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg">resetSxg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutominify` <a name="putAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify"></a>

```java
public void putAutominify(IResolvable OR java.util.List<RulesetRulesActionParametersAutominify> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>>

---

##### `putBrowserTtl` <a name="putBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl"></a>

```java
public void putBrowserTtl(RulesetRulesActionParametersBrowserTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `putCacheKey` <a name="putCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey"></a>

```java
public void putCacheKey(RulesetRulesActionParametersCacheKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `putEdgeTtl` <a name="putEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl"></a>

```java
public void putEdgeTtl(RulesetRulesActionParametersEdgeTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `putFromList` <a name="putFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList"></a>

```java
public void putFromList(RulesetRulesActionParametersFromList value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `putFromValue` <a name="putFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue"></a>

```java
public void putFromValue(RulesetRulesActionParametersFromValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<RulesetRulesActionParametersHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>>

---

##### `putMatchedData` <a name="putMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData"></a>

```java
public void putMatchedData(RulesetRulesActionParametersMatchedData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin"></a>

```java
public void putOrigin(RulesetRulesActionParametersOrigin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides"></a>

```java
public void putOverrides(RulesetRulesActionParametersOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `putResponse` <a name="putResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse"></a>

```java
public void putResponse(IResolvable OR java.util.List<RulesetRulesActionParametersResponse> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>>

---

##### `putServeStale` <a name="putServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale"></a>

```java
public void putServeStale(RulesetRulesActionParametersServeStale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `putSni` <a name="putSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni"></a>

```java
public void putSni(RulesetRulesActionParametersSni value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `putUri` <a name="putUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri"></a>

```java
public void putUri(RulesetRulesActionParametersUri value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `resetAutomaticHttpsRewrites` <a name="resetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites"></a>

```java
public void resetAutomaticHttpsRewrites()
```

##### `resetAutominify` <a name="resetAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify"></a>

```java
public void resetAutominify()
```

##### `resetBic` <a name="resetBic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic"></a>

```java
public void resetBic()
```

##### `resetBrowserTtl` <a name="resetBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl"></a>

```java
public void resetBrowserTtl()
```

##### `resetCache` <a name="resetCache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache"></a>

```java
public void resetCache()
```

##### `resetCacheKey` <a name="resetCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey"></a>

```java
public void resetCacheKey()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCookieFields` <a name="resetCookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields"></a>

```java
public void resetCookieFields()
```

##### `resetDisableApps` <a name="resetDisableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps"></a>

```java
public void resetDisableApps()
```

##### `resetDisableRailgun` <a name="resetDisableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun"></a>

```java
public void resetDisableRailgun()
```

##### `resetDisableZaraz` <a name="resetDisableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz"></a>

```java
public void resetDisableZaraz()
```

##### `resetEdgeTtl` <a name="resetEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl"></a>

```java
public void resetEdgeTtl()
```

##### `resetEmailObfuscation` <a name="resetEmailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation"></a>

```java
public void resetEmailObfuscation()
```

##### `resetFromList` <a name="resetFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList"></a>

```java
public void resetFromList()
```

##### `resetFromValue` <a name="resetFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue"></a>

```java
public void resetFromValue()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader"></a>

```java
public void resetHostHeader()
```

##### `resetHotlinkProtection` <a name="resetHotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection"></a>

```java
public void resetHotlinkProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIncrement` <a name="resetIncrement" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement"></a>

```java
public void resetIncrement()
```

##### `resetMatchedData` <a name="resetMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData"></a>

```java
public void resetMatchedData()
```

##### `resetMirage` <a name="resetMirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage"></a>

```java
public void resetMirage()
```

##### `resetOpportunisticEncryption` <a name="resetOpportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption"></a>

```java
public void resetOpportunisticEncryption()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetOriginErrorPagePassthru` <a name="resetOriginErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru"></a>

```java
public void resetOriginErrorPagePassthru()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetPhases` <a name="resetPhases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases"></a>

```java
public void resetPhases()
```

##### `resetPolish` <a name="resetPolish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish"></a>

```java
public void resetPolish()
```

##### `resetProducts` <a name="resetProducts" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts"></a>

```java
public void resetProducts()
```

##### `resetRequestFields` <a name="resetRequestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields"></a>

```java
public void resetRequestFields()
```

##### `resetRespectStrongEtags` <a name="resetRespectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags"></a>

```java
public void resetRespectStrongEtags()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse"></a>

```java
public void resetResponse()
```

##### `resetResponseFields` <a name="resetResponseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields"></a>

```java
public void resetResponseFields()
```

##### `resetRocketLoader` <a name="resetRocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader"></a>

```java
public void resetRocketLoader()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules"></a>

```java
public void resetRules()
```

##### `resetRuleset` <a name="resetRuleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset"></a>

```java
public void resetRuleset()
```

##### `resetRulesets` <a name="resetRulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets"></a>

```java
public void resetRulesets()
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel"></a>

```java
public void resetSecurityLevel()
```

##### `resetServerSideExcludes` <a name="resetServerSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes"></a>

```java
public void resetServerSideExcludes()
```

##### `resetServeStale` <a name="resetServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale"></a>

```java
public void resetServeStale()
```

##### `resetSni` <a name="resetSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni"></a>

```java
public void resetSni()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```

##### `resetSxg` <a name="resetSxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg"></a>

```java
public void resetSxg()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri"></a>

```java
public void resetUri()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify">autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl">browserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey">cacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl">edgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList">fromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue">fromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData">matchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale">serveStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput">automaticHttpsRewritesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput">autominifyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput">bicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput">browserTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput">cacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput">cacheKeyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput">cookieFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput">disableAppsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput">disableRailgunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput">disableZarazInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput">edgeTtlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput">emailObfuscationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput">fromListInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput">fromValueInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput">hotlinkProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput">incrementInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput">matchedDataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput">mirageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput">opportunisticEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput">originErrorPagePassthruInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput">originInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput">phasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput">polishInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput">productsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput">requestFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput">respectStrongEtagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput">responseFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput">responseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput">rocketLoaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput">rulesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput">rulesetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput">rulesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput">serverSideExcludesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput">serveStaleInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput">sniInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput">sxgInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput">uriInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic">bic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache">cache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields">cookieFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps">disableApps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun">disableRailgun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz">disableZaraz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection">hotlinkProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment">increment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage">mirage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru">originErrorPagePassthru</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases">phases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish">polish</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields">requestFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags">respectStrongEtags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields">responseFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules">rules</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets">rulesets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes">serverSideExcludes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl">ssl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg">sxg</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autominify`<sup>Required</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify"></a>

```java
public RulesetRulesActionParametersAutominifyList getAutominify();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a>

---

##### `browserTtl`<sup>Required</sup> <a name="browserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl"></a>

```java
public RulesetRulesActionParametersBrowserTtlOutputReference getBrowserTtl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a>

---

##### `cacheKey`<sup>Required</sup> <a name="cacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey"></a>

```java
public RulesetRulesActionParametersCacheKeyOutputReference getCacheKey();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a>

---

##### `edgeTtl`<sup>Required</sup> <a name="edgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl"></a>

```java
public RulesetRulesActionParametersEdgeTtlOutputReference getEdgeTtl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a>

---

##### `fromList`<sup>Required</sup> <a name="fromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList"></a>

```java
public RulesetRulesActionParametersFromListOutputReference getFromList();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a>

---

##### `fromValue`<sup>Required</sup> <a name="fromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue"></a>

```java
public RulesetRulesActionParametersFromValueOutputReference getFromValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers"></a>

```java
public RulesetRulesActionParametersHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a>

---

##### `matchedData`<sup>Required</sup> <a name="matchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData"></a>

```java
public RulesetRulesActionParametersMatchedDataOutputReference getMatchedData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin"></a>

```java
public RulesetRulesActionParametersOriginOutputReference getOrigin();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides"></a>

```java
public RulesetRulesActionParametersOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response"></a>

```java
public RulesetRulesActionParametersResponseList getResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a>

---

##### `serveStale`<sup>Required</sup> <a name="serveStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale"></a>

```java
public RulesetRulesActionParametersServeStaleOutputReference getServeStale();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a>

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni"></a>

```java
public RulesetRulesActionParametersSniOutputReference getSni();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri"></a>

```java
public RulesetRulesActionParametersUriOutputReference getUri();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a>

---

##### `automaticHttpsRewritesInput`<sup>Optional</sup> <a name="automaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput"></a>

```java
public java.lang.Object getAutomaticHttpsRewritesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autominifyInput`<sup>Optional</sup> <a name="autominifyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput"></a>

```java
public java.lang.Object getAutominifyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>>

---

##### `bicInput`<sup>Optional</sup> <a name="bicInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput"></a>

```java
public java.lang.Object getBicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `browserTtlInput`<sup>Optional</sup> <a name="browserTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput"></a>

```java
public RulesetRulesActionParametersBrowserTtl getBrowserTtlInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput"></a>

```java
public java.lang.Object getCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheKeyInput`<sup>Optional</sup> <a name="cacheKeyInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput"></a>

```java
public RulesetRulesActionParametersCacheKey getCacheKeyInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `cookieFieldsInput`<sup>Optional</sup> <a name="cookieFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput"></a>

```java
public java.util.List<java.lang.String> getCookieFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableAppsInput`<sup>Optional</sup> <a name="disableAppsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput"></a>

```java
public java.lang.Object getDisableAppsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableRailgunInput`<sup>Optional</sup> <a name="disableRailgunInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput"></a>

```java
public java.lang.Object getDisableRailgunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableZarazInput`<sup>Optional</sup> <a name="disableZarazInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput"></a>

```java
public java.lang.Object getDisableZarazInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeTtlInput`<sup>Optional</sup> <a name="edgeTtlInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput"></a>

```java
public RulesetRulesActionParametersEdgeTtl getEdgeTtlInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `emailObfuscationInput`<sup>Optional</sup> <a name="emailObfuscationInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput"></a>

```java
public java.lang.Object getEmailObfuscationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fromListInput`<sup>Optional</sup> <a name="fromListInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput"></a>

```java
public RulesetRulesActionParametersFromList getFromListInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `fromValueInput`<sup>Optional</sup> <a name="fromValueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput"></a>

```java
public RulesetRulesActionParametersFromValue getFromValueInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>>

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput"></a>

```java
public java.lang.String getHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `hotlinkProtectionInput`<sup>Optional</sup> <a name="hotlinkProtectionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput"></a>

```java
public java.lang.Object getHotlinkProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incrementInput`<sup>Optional</sup> <a name="incrementInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput"></a>

```java
public java.lang.Number getIncrementInput();
```

- *Type:* java.lang.Number

---

##### `matchedDataInput`<sup>Optional</sup> <a name="matchedDataInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput"></a>

```java
public RulesetRulesActionParametersMatchedData getMatchedDataInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `mirageInput`<sup>Optional</sup> <a name="mirageInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput"></a>

```java
public java.lang.Object getMirageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opportunisticEncryptionInput`<sup>Optional</sup> <a name="opportunisticEncryptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput"></a>

```java
public java.lang.Object getOpportunisticEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originErrorPagePassthruInput`<sup>Optional</sup> <a name="originErrorPagePassthruInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput"></a>

```java
public java.lang.Object getOriginErrorPagePassthruInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput"></a>

```java
public RulesetRulesActionParametersOrigin getOriginInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput"></a>

```java
public RulesetRulesActionParametersOverrides getOverridesInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `phasesInput`<sup>Optional</sup> <a name="phasesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput"></a>

```java
public java.util.List<java.lang.String> getPhasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `polishInput`<sup>Optional</sup> <a name="polishInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput"></a>

```java
public java.lang.String getPolishInput();
```

- *Type:* java.lang.String

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput"></a>

```java
public java.util.List<java.lang.String> getProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestFieldsInput`<sup>Optional</sup> <a name="requestFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput"></a>

```java
public java.util.List<java.lang.String> getRequestFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectStrongEtagsInput`<sup>Optional</sup> <a name="respectStrongEtagsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput"></a>

```java
public java.lang.Object getRespectStrongEtagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseFieldsInput`<sup>Optional</sup> <a name="responseFieldsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput"></a>

```java
public java.util.List<java.lang.String> getResponseFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput"></a>

```java
public java.lang.Object getResponseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>>

---

##### `rocketLoaderInput`<sup>Optional</sup> <a name="rocketLoaderInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput"></a>

```java
public java.lang.Object getRocketLoaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput"></a>

```java
public java.lang.String getRulesetInput();
```

- *Type:* java.lang.String

---

##### `rulesetsInput`<sup>Optional</sup> <a name="rulesetsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput"></a>

```java
public java.util.List<java.lang.String> getRulesetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRulesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput"></a>

```java
public java.lang.String getSecurityLevelInput();
```

- *Type:* java.lang.String

---

##### `serverSideExcludesInput`<sup>Optional</sup> <a name="serverSideExcludesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput"></a>

```java
public java.lang.Object getServerSideExcludesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveStaleInput`<sup>Optional</sup> <a name="serveStaleInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput"></a>

```java
public RulesetRulesActionParametersServeStale getServeStaleInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `sniInput`<sup>Optional</sup> <a name="sniInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput"></a>

```java
public RulesetRulesActionParametersSni getSniInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput"></a>

```java
public java.lang.String getSslInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `sxgInput`<sup>Optional</sup> <a name="sxgInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput"></a>

```java
public java.lang.Object getSxgInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput"></a>

```java
public RulesetRulesActionParametersUri getUriInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```java
public java.lang.Object getAutomaticHttpsRewrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bic`<sup>Required</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic"></a>

```java
public java.lang.Object getBic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache"></a>

```java
public java.lang.Object getCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `cookieFields`<sup>Required</sup> <a name="cookieFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields"></a>

```java
public java.util.List<java.lang.String> getCookieFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableApps`<sup>Required</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps"></a>

```java
public java.lang.Object getDisableApps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableRailgun`<sup>Required</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun"></a>

```java
public java.lang.Object getDisableRailgun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableZaraz`<sup>Required</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz"></a>

```java
public java.lang.Object getDisableZaraz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation"></a>

```java
public java.lang.Object getEmailObfuscation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

---

##### `hotlinkProtection`<sup>Required</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```java
public java.lang.Object getHotlinkProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `increment`<sup>Required</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment"></a>

```java
public java.lang.Number getIncrement();
```

- *Type:* java.lang.Number

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage"></a>

```java
public java.lang.Object getMirage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```java
public java.lang.Object getOpportunisticEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originErrorPagePassthru`<sup>Required</sup> <a name="originErrorPagePassthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```java
public java.lang.Object getOriginErrorPagePassthru();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases"></a>

```java
public java.util.List<java.lang.String> getPhases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish"></a>

```java
public java.lang.String getPolish();
```

- *Type:* java.lang.String

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestFields`<sup>Required</sup> <a name="requestFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields"></a>

```java
public java.util.List<java.lang.String> getRequestFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectStrongEtags`<sup>Required</sup> <a name="respectStrongEtags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```java
public java.lang.Object getRespectStrongEtags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseFields`<sup>Required</sup> <a name="responseFields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields"></a>

```java
public java.util.List<java.lang.String> getResponseFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader"></a>

```java
public java.lang.Object getRocketLoader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

---

##### `rulesets`<sup>Required</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets"></a>

```java
public java.util.List<java.lang.String> getRulesets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

---

##### `serverSideExcludes`<sup>Required</sup> <a name="serverSideExcludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```java
public java.lang.Object getServerSideExcludes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl"></a>

```java
public java.lang.String getSsl();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `sxg`<sup>Required</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg"></a>

```java
public java.lang.Object getSxg();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---


### RulesetRulesActionParametersOverridesCategoriesList <a name="RulesetRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList;

new RulesetRulesActionParametersOverridesCategoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get"></a>

```java
public RulesetRulesActionParametersOverridesCategoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>>

---


### RulesetRulesActionParametersOverridesCategoriesOutputReference <a name="RulesetRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference;

new RulesetRulesActionParametersOverridesCategoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersOverridesOutputReference <a name="RulesetRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference;

new RulesetRulesActionParametersOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories">putCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel">resetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategories` <a name="putCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories"></a>

```java
public void putCategories(IResolvable OR java.util.List<RulesetRulesActionParametersOverridesCategories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<RulesetRulesActionParametersOverridesRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules"></a>

```java
public void resetRules()
```

##### `resetSensitivityLevel` <a name="resetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel"></a>

```java
public void resetSensitivityLevel()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories">categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput">sensitivityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories"></a>

```java
public RulesetRulesActionParametersOverridesCategoriesList getCategories();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules"></a>

```java
public RulesetRulesActionParametersOverridesRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput"></a>

```java
public java.lang.Object getCategoriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>>

---

##### `sensitivityLevelInput`<sup>Optional</sup> <a name="sensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput"></a>

```java
public java.lang.String getSensitivityLevelInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```java
public java.lang.String getSensitivityLevel();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersOverrides getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---


### RulesetRulesActionParametersOverridesRulesList <a name="RulesetRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList;

new RulesetRulesActionParametersOverridesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get"></a>

```java
public RulesetRulesActionParametersOverridesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>>

---


### RulesetRulesActionParametersOverridesRulesOutputReference <a name="RulesetRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference;

new RulesetRulesActionParametersOverridesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold">resetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel">resetSensitivityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetScoreThreshold` <a name="resetScoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold"></a>

```java
public void resetScoreThreshold()
```

##### `resetSensitivityLevel` <a name="resetSensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel"></a>

```java
public void resetSensitivityLevel()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput">scoreThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput">sensitivityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">scoreThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scoreThresholdInput`<sup>Optional</sup> <a name="scoreThresholdInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput"></a>

```java
public java.lang.Number getScoreThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sensitivityLevelInput`<sup>Optional</sup> <a name="sensitivityLevelInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput"></a>

```java
public java.lang.String getSensitivityLevelInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scoreThreshold`<sup>Required</sup> <a name="scoreThreshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```java
public java.lang.Number getScoreThreshold();
```

- *Type:* java.lang.Number

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```java
public java.lang.String getSensitivityLevel();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersResponseList <a name="RulesetRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersResponseList;

new RulesetRulesActionParametersResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get"></a>

```java
public RulesetRulesActionParametersResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>>

---


### RulesetRulesActionParametersResponseOutputReference <a name="RulesetRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference;

new RulesetRulesActionParametersResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesActionParametersServeStaleOutputReference <a name="RulesetRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference;

new RulesetRulesActionParametersServeStaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating">resetDisableStaleWhileUpdating</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableStaleWhileUpdating` <a name="resetDisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating"></a>

```java
public void resetDisableStaleWhileUpdating()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput">disableStaleWhileUpdatingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">disableStaleWhileUpdating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableStaleWhileUpdatingInput`<sup>Optional</sup> <a name="disableStaleWhileUpdatingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput"></a>

```java
public java.lang.Object getDisableStaleWhileUpdatingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableStaleWhileUpdating`<sup>Required</sup> <a name="disableStaleWhileUpdating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```java
public java.lang.Object getDisableStaleWhileUpdating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersServeStale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---


### RulesetRulesActionParametersSniOutputReference <a name="RulesetRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference;

new RulesetRulesActionParametersSniOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersSni getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---


### RulesetRulesActionParametersUriOutputReference <a name="RulesetRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference;

new RulesetRulesActionParametersUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath">putPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPath` <a name="putPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath"></a>

```java
public void putPath(RulesetRulesActionParametersUriPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery"></a>

```java
public void putQuery(RulesetRulesActionParametersUriQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput">originInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput">pathInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin">origin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path"></a>

```java
public RulesetRulesActionParametersUriPathOutputReference getPath();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query"></a>

```java
public RulesetRulesActionParametersUriQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput"></a>

```java
public java.lang.Object getOriginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput"></a>

```java
public RulesetRulesActionParametersUriPath getPathInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput"></a>

```java
public RulesetRulesActionParametersUriQuery getQueryInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin"></a>

```java
public java.lang.Object getOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersUri getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---


### RulesetRulesActionParametersUriPathOutputReference <a name="RulesetRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference;

new RulesetRulesActionParametersUriPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersUriPath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---


### RulesetRulesActionParametersUriQueryOutputReference <a name="RulesetRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference;

new RulesetRulesActionParametersUriQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```java
public RulesetRulesActionParametersUriQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---


### RulesetRulesExposedCredentialCheckOutputReference <a name="RulesetRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference;

new RulesetRulesExposedCredentialCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression">resetPasswordExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression">resetUsernameExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordExpression` <a name="resetPasswordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression"></a>

```java
public void resetPasswordExpression()
```

##### `resetUsernameExpression` <a name="resetUsernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression"></a>

```java
public void resetUsernameExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput">passwordExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput">usernameExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression">passwordExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression">usernameExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordExpressionInput`<sup>Optional</sup> <a name="passwordExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput"></a>

```java
public java.lang.String getPasswordExpressionInput();
```

- *Type:* java.lang.String

---

##### `usernameExpressionInput`<sup>Optional</sup> <a name="usernameExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput"></a>

```java
public java.lang.String getUsernameExpressionInput();
```

- *Type:* java.lang.String

---

##### `passwordExpression`<sup>Required</sup> <a name="passwordExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```java
public java.lang.String getPasswordExpression();
```

- *Type:* java.lang.String

---

##### `usernameExpression`<sup>Required</sup> <a name="usernameExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```java
public java.lang.String getUsernameExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```java
public RulesetRulesExposedCredentialCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---


### RulesetRulesList <a name="RulesetRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesList;

new RulesetRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get"></a>

```java
public RulesetRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>>

---


### RulesetRulesLoggingOutputReference <a name="RulesetRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesLoggingOutputReference;

new RulesetRulesLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue"></a>

```java
public RulesetRulesLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---


### RulesetRulesOutputReference <a name="RulesetRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesOutputReference;

new RulesetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters">putActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck">putExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit">putRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters">resetActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck">resetExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated">resetLastUpdated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit">resetRatelimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionParameters` <a name="putActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters"></a>

```java
public void putActionParameters(RulesetRulesActionParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `putExposedCredentialCheck` <a name="putExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck"></a>

```java
public void putExposedCredentialCheck(RulesetRulesExposedCredentialCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging"></a>

```java
public void putLogging(RulesetRulesLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `putRatelimit` <a name="putRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit"></a>

```java
public void putRatelimit(RulesetRulesRatelimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetActionParameters` <a name="resetActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters"></a>

```java
public void resetActionParameters()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExposedCredentialCheck` <a name="resetExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck"></a>

```java
public void resetExposedCredentialCheck()
```

##### `resetLastUpdated` <a name="resetLastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated"></a>

```java
public void resetLastUpdated()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetRatelimit` <a name="resetRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit"></a>

```java
public void resetRatelimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters">actionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck">exposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput">actionParametersInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput">exposedCredentialCheckInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput">lastUpdatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput">ratelimitInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionParameters`<sup>Required</sup> <a name="actionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters"></a>

```java
public RulesetRulesActionParametersOutputReference getActionParameters();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a>

---

##### `exposedCredentialCheck`<sup>Required</sup> <a name="exposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck"></a>

```java
public RulesetRulesExposedCredentialCheckOutputReference getExposedCredentialCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging"></a>

```java
public RulesetRulesLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a>

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit"></a>

```java
public RulesetRulesRatelimitOutputReference getRatelimit();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `actionParametersInput`<sup>Optional</sup> <a name="actionParametersInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput"></a>

```java
public RulesetRulesActionParameters getActionParametersInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposedCredentialCheckInput`<sup>Optional</sup> <a name="exposedCredentialCheckInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput"></a>

```java
public RulesetRulesExposedCredentialCheck getExposedCredentialCheckInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `lastUpdatedInput`<sup>Optional</sup> <a name="lastUpdatedInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput"></a>

```java
public java.lang.String getLastUpdatedInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput"></a>

```java
public RulesetRulesLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `ratelimitInput`<sup>Optional</sup> <a name="ratelimitInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput"></a>

```java
public RulesetRulesRatelimit getRatelimitInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a> OR com.hashicorp.cdktf.IResolvable

---


### RulesetRulesRatelimitOutputReference <a name="RulesetRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.ruleset.RulesetRulesRatelimitOutputReference;

new RulesetRulesRatelimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics">resetCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression">resetCountingExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout">resetMitigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod">resetRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin">resetRequestsToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod">resetScorePerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName">resetScoreResponseHeaderName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCharacteristics` <a name="resetCharacteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics"></a>

```java
public void resetCharacteristics()
```

##### `resetCountingExpression` <a name="resetCountingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression"></a>

```java
public void resetCountingExpression()
```

##### `resetMitigationTimeout` <a name="resetMitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout"></a>

```java
public void resetMitigationTimeout()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRequestsPerPeriod` <a name="resetRequestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod"></a>

```java
public void resetRequestsPerPeriod()
```

##### `resetRequestsToOrigin` <a name="resetRequestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin"></a>

```java
public void resetRequestsToOrigin()
```

##### `resetScorePerPeriod` <a name="resetScorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod"></a>

```java
public void resetScorePerPeriod()
```

##### `resetScoreResponseHeaderName` <a name="resetScoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName"></a>

```java
public void resetScoreResponseHeaderName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput">characteristicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput">countingExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput">mitigationTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput">requestsPerPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput">requestsToOriginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput">scorePerPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput">scoreResponseHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics">characteristics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression">countingExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout">mitigationTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod">requestsPerPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin">requestsToOrigin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod">scorePerPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName">scoreResponseHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `characteristicsInput`<sup>Optional</sup> <a name="characteristicsInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput"></a>

```java
public java.util.List<java.lang.String> getCharacteristicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countingExpressionInput`<sup>Optional</sup> <a name="countingExpressionInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput"></a>

```java
public java.lang.String getCountingExpressionInput();
```

- *Type:* java.lang.String

---

##### `mitigationTimeoutInput`<sup>Optional</sup> <a name="mitigationTimeoutInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput"></a>

```java
public java.lang.Number getMitigationTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `requestsPerPeriodInput`<sup>Optional</sup> <a name="requestsPerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput"></a>

```java
public java.lang.Number getRequestsPerPeriodInput();
```

- *Type:* java.lang.Number

---

##### `requestsToOriginInput`<sup>Optional</sup> <a name="requestsToOriginInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput"></a>

```java
public java.lang.Object getRequestsToOriginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scorePerPeriodInput`<sup>Optional</sup> <a name="scorePerPeriodInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput"></a>

```java
public java.lang.Number getScorePerPeriodInput();
```

- *Type:* java.lang.Number

---

##### `scoreResponseHeaderNameInput`<sup>Optional</sup> <a name="scoreResponseHeaderNameInput" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput"></a>

```java
public java.lang.String getScoreResponseHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `characteristics`<sup>Required</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics"></a>

```java
public java.util.List<java.lang.String> getCharacteristics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countingExpression`<sup>Required</sup> <a name="countingExpression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression"></a>

```java
public java.lang.String getCountingExpression();
```

- *Type:* java.lang.String

---

##### `mitigationTimeout`<sup>Required</sup> <a name="mitigationTimeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```java
public java.lang.Number getMitigationTimeout();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `requestsPerPeriod`<sup>Required</sup> <a name="requestsPerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```java
public java.lang.Number getRequestsPerPeriod();
```

- *Type:* java.lang.Number

---

##### `requestsToOrigin`<sup>Required</sup> <a name="requestsToOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```java
public java.lang.Object getRequestsToOrigin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scorePerPeriod`<sup>Required</sup> <a name="scorePerPeriod" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```java
public java.lang.Number getScorePerPeriod();
```

- *Type:* java.lang.Number

---

##### `scoreResponseHeaderName`<sup>Required</sup> <a name="scoreResponseHeaderName" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```java
public java.lang.String getScoreResponseHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue"></a>

```java
public RulesetRulesRatelimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---


