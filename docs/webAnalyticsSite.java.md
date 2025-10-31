# `webAnalyticsSite` Submodule <a name="`webAnalyticsSite` Submodule" id="@cdktf/provider-cloudflare.webAnalyticsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsSite <a name="WebAnalyticsSite" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSite;

WebAnalyticsSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .autoInstall(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .host(java.lang.String)
//  .lite(java.lang.Boolean|IResolvable)
//  .zoneTag(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.autoInstall">autoInstall</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If enabled, the JavaScript snippet is automatically injected for orange-clouded sites. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables or disables RUM. This option can be used only when auto_install is set to true. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The hostname to use for gray-clouded sites. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.lite">lite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If enabled, the JavaScript snippet will not be injected for visitors from the EU. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.zoneTag">zoneTag</a></code> | <code>java.lang.String</code> | The zone identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}

---

##### `autoInstall`<sup>Optional</sup> <a name="autoInstall" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.autoInstall"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables or disables RUM. This option can be used only when auto_install is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#enabled WebAnalyticsSite#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The hostname to use for gray-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}

---

##### `lite`<sup>Optional</sup> <a name="lite" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.lite"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If enabled, the JavaScript snippet will not be injected for visitors from the EU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#lite WebAnalyticsSite#lite}

---

##### `zoneTag`<sup>Optional</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.zoneTag"></a>

- *Type:* java.lang.String

The zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetAutoInstall">resetAutoInstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetLite">resetLite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetZoneTag">resetZoneTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoInstall` <a name="resetAutoInstall" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetAutoInstall"></a>

```java
public void resetAutoInstall()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetHost"></a>

```java
public void resetHost()
```

##### `resetLite` <a name="resetLite" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetLite"></a>

```java
public void resetLite()
```

##### `resetZoneTag` <a name="resetZoneTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetZoneTag"></a>

```java
public void resetZoneTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSite;

WebAnalyticsSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSite;

WebAnalyticsSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSite;

WebAnalyticsSite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSite;

WebAnalyticsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WebAnalyticsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WebAnalyticsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WebAnalyticsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WebAnalyticsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList">WebAnalyticsSiteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.ruleset">ruleset</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference">WebAnalyticsSiteRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteTag">siteTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteToken">siteToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.snippet">snippet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstallInput">autoInstallInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.liteInput">liteInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTagInput">zoneTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstall">autoInstall</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lite">lite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTag">zoneTag</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.rules"></a>

```java
public WebAnalyticsSiteRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList">WebAnalyticsSiteRulesList</a>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.ruleset"></a>

```java
public WebAnalyticsSiteRulesetOutputReference getRuleset();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference">WebAnalyticsSiteRulesetOutputReference</a>

---

##### `siteTag`<sup>Required</sup> <a name="siteTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteTag"></a>

```java
public java.lang.String getSiteTag();
```

- *Type:* java.lang.String

---

##### `siteToken`<sup>Required</sup> <a name="siteToken" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteToken"></a>

```java
public java.lang.String getSiteToken();
```

- *Type:* java.lang.String

---

##### `snippet`<sup>Required</sup> <a name="snippet" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.snippet"></a>

```java
public java.lang.String getSnippet();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `autoInstallInput`<sup>Optional</sup> <a name="autoInstallInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstallInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoInstallInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `liteInput`<sup>Optional</sup> <a name="liteInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.liteInput"></a>

```java
public java.lang.Boolean|IResolvable getLiteInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `zoneTagInput`<sup>Optional</sup> <a name="zoneTagInput" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTagInput"></a>

```java
public java.lang.String getZoneTagInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `autoInstall`<sup>Required</sup> <a name="autoInstall" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstall"></a>

```java
public java.lang.Boolean|IResolvable getAutoInstall();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `lite`<sup>Required</sup> <a name="lite" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lite"></a>

```java
public java.lang.Boolean|IResolvable getLite();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `zoneTag`<sup>Required</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTag"></a>

```java
public java.lang.String getZoneTag();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WebAnalyticsSiteConfig <a name="WebAnalyticsSiteConfig" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteConfig;

WebAnalyticsSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .autoInstall(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .host(java.lang.String)
//  .lite(java.lang.Boolean|IResolvable)
//  .zoneTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.autoInstall">autoInstall</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If enabled, the JavaScript snippet is automatically injected for orange-clouded sites. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables or disables RUM. This option can be used only when auto_install is set to true. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.host">host</a></code> | <code>java.lang.String</code> | The hostname to use for gray-clouded sites. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lite">lite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If enabled, the JavaScript snippet will not be injected for visitors from the EU. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.zoneTag">zoneTag</a></code> | <code>java.lang.String</code> | The zone identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}

---

##### `autoInstall`<sup>Optional</sup> <a name="autoInstall" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.autoInstall"></a>

```java
public java.lang.Boolean|IResolvable getAutoInstall();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables or disables RUM. This option can be used only when auto_install is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#enabled WebAnalyticsSite#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The hostname to use for gray-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}

---

##### `lite`<sup>Optional</sup> <a name="lite" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lite"></a>

```java
public java.lang.Boolean|IResolvable getLite();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If enabled, the JavaScript snippet will not be injected for visitors from the EU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#lite WebAnalyticsSite#lite}

---

##### `zoneTag`<sup>Optional</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.zoneTag"></a>

```java
public java.lang.String getZoneTag();
```

- *Type:* java.lang.String

The zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}

---

### WebAnalyticsSiteRules <a name="WebAnalyticsSiteRules" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteRules;

WebAnalyticsSiteRules.builder()
    .build();
```


### WebAnalyticsSiteRuleset <a name="WebAnalyticsSiteRuleset" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteRuleset;

WebAnalyticsSiteRuleset.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### WebAnalyticsSiteRulesetOutputReference <a name="WebAnalyticsSiteRulesetOutputReference" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteRulesetOutputReference;

new WebAnalyticsSiteRulesetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneTag">zoneTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset">WebAnalyticsSiteRuleset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

##### `zoneTag`<sup>Required</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneTag"></a>

```java
public java.lang.String getZoneTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.internalValue"></a>

```java
public WebAnalyticsSiteRuleset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset">WebAnalyticsSiteRuleset</a>

---


### WebAnalyticsSiteRulesList <a name="WebAnalyticsSiteRulesList" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteRulesList;

new WebAnalyticsSiteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get"></a>

```java
public WebAnalyticsSiteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WebAnalyticsSiteRulesOutputReference <a name="WebAnalyticsSiteRulesOutputReference" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.web_analytics_site.WebAnalyticsSiteRulesOutputReference;

new WebAnalyticsSiteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.inclusive">inclusive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.isPaused">isPaused</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules">WebAnalyticsSiteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.inclusive"></a>

```java
public IResolvable getInclusive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.isPaused"></a>

```java
public IResolvable getIsPaused();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.internalValue"></a>

```java
public WebAnalyticsSiteRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules">WebAnalyticsSiteRules</a>

---



