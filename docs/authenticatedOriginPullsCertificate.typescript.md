# `authenticatedOriginPullsCertificate` Submodule <a name="`authenticatedOriginPullsCertificate` Submodule" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsCertificate <a name="AuthenticatedOriginPullsCertificate" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

new authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate(scope: Construct, id: string, config: AuthenticatedOriginPullsCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: AuthenticatedOriginPullsCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference">AuthenticatedOriginPullsCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticatedOriginPullsCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference">AuthenticatedOriginPullsCertificateTimeoutsOutputReference</a>

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AuthenticatedOriginPullsCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsCertificateConfig <a name="AuthenticatedOriginPullsCertificateConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

const authenticatedOriginPullsCertificateConfig: authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | The public client certificate. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The private key of the client certificate. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.type">type</a></code> | <code>string</code> | The form of Authenticated Origin Pulls to upload the certificate to. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#id AuthenticatedOriginPullsCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The public client certificate. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#certificate AuthenticatedOriginPullsCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The private key of the client certificate. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#private_key AuthenticatedOriginPullsCertificate#private_key}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The form of Authenticated Origin Pulls to upload the certificate to.

Available values: `per-zone`, `per-hostname`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#type AuthenticatedOriginPullsCertificate#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#zone_id AuthenticatedOriginPullsCertificate#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#id AuthenticatedOriginPullsCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticatedOriginPullsCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#timeouts AuthenticatedOriginPullsCertificate#timeouts}

---

### AuthenticatedOriginPullsCertificateTimeouts <a name="AuthenticatedOriginPullsCertificateTimeouts" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

const authenticatedOriginPullsCertificateTimeouts: authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#create AuthenticatedOriginPullsCertificate#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate#create AuthenticatedOriginPullsCertificate#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticatedOriginPullsCertificateTimeoutsOutputReference <a name="AuthenticatedOriginPullsCertificateTimeoutsOutputReference" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

new authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticatedOriginPullsCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateTimeouts">AuthenticatedOriginPullsCertificateTimeouts</a> | cdktf.IResolvable

---


