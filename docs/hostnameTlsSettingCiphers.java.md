# `cloudflare_hostname_tls_setting_ciphers`

Refer to the Terraform Registory for docs: [`cloudflare_hostname_tls_setting_ciphers`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers).

# `hostnameTlsSettingCiphers` Submodule <a name="`hostnameTlsSettingCiphers` Submodule" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostnameTlsSettingCiphers <a name="HostnameTlsSettingCiphers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers cloudflare_hostname_tls_setting_ciphers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.hostname_tls_setting_ciphers.HostnameTlsSettingCiphers;

HostnameTlsSettingCiphers.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
//  .ports(java.util.List<java.lang.Number>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Ports to use within the IP rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.value"></a>

- *Type:* java.util.List<java.lang.String>

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.ports"></a>

- *Type:* java.util.List<java.lang.Number>

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId"></a>

```java
public void resetId()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts"></a>

```java
public void resetPorts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.hostname_tls_setting_ciphers.HostnameTlsSettingCiphers;

HostnameTlsSettingCiphers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.hostname_tls_setting_ciphers.HostnameTlsSettingCiphers;

HostnameTlsSettingCiphers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.hostname_tls_setting_ciphers.HostnameTlsSettingCiphers;

HostnameTlsSettingCiphers.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostnameTlsSettingCiphersConfig <a name="HostnameTlsSettingCiphersConfig" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.hostname_tls_setting_ciphers.HostnameTlsSettingCiphersConfig;

HostnameTlsSettingCiphersConfig.builder()
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
    .hostname(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
//  .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Ports to use within the IP rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---



