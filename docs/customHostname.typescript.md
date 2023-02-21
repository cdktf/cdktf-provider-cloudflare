# `customHostname` Submodule <a name="`customHostname` Submodule" id="@cdktf/provider-cloudflare.customHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostname <a name="CustomHostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostname(scope: Construct, id: string, config: CustomHostnameConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer">resetCustomOriginServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni">resetCustomOriginSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetWaitForSslPendingValidation">resetWaitForSslPendingValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSsl` <a name="putSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl"></a>

```typescript
public putSsl(value: IResolvable | CustomHostnameSsl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata"></a>

```typescript
public resetCustomMetadata(): void
```

##### `resetCustomOriginServer` <a name="resetCustomOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer"></a>

```typescript
public resetCustomOriginServer(): void
```

##### `resetCustomOriginSni` <a name="resetCustomOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni"></a>

```typescript
public resetCustomOriginSni(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetWaitForSslPendingValidation` <a name="resetWaitForSslPendingValidation" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetWaitForSslPendingValidation"></a>

```typescript
public resetWaitForSslPendingValidation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

customHostname.CustomHostname.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

customHostname.CustomHostname.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

customHostname.CustomHostname.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification">ownershipVerification</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp">ownershipVerificationHttp</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList">CustomHostnameSslList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput">customMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput">customOriginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput">customOriginSniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput">sslInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.waitForSslPendingValidationInput">waitForSslPendingValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer">customOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni">customOriginSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.waitForSslPendingValidation">waitForSslPendingValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ownershipVerification`<sup>Required</sup> <a name="ownershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification"></a>

```typescript
public readonly ownershipVerification: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ownershipVerificationHttp`<sup>Required</sup> <a name="ownershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp"></a>

```typescript
public readonly ownershipVerificationHttp: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl"></a>

```typescript
public readonly ssl: CustomHostnameSslList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList">CustomHostnameSslList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput"></a>

```typescript
public readonly customMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customOriginServerInput`<sup>Optional</sup> <a name="customOriginServerInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput"></a>

```typescript
public readonly customOriginServerInput: string;
```

- *Type:* string

---

##### `customOriginSniInput`<sup>Optional</sup> <a name="customOriginSniInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput"></a>

```typescript
public readonly customOriginSniInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput"></a>

```typescript
public readonly sslInput: IResolvable | CustomHostnameSsl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]

---

##### `waitForSslPendingValidationInput`<sup>Optional</sup> <a name="waitForSslPendingValidationInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.waitForSslPendingValidationInput"></a>

```typescript
public readonly waitForSslPendingValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customOriginServer`<sup>Required</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer"></a>

```typescript
public readonly customOriginServer: string;
```

- *Type:* string

---

##### `customOriginSni`<sup>Required</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni"></a>

```typescript
public readonly customOriginSni: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `waitForSslPendingValidation`<sup>Required</sup> <a name="waitForSslPendingValidation" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.waitForSslPendingValidation"></a>

```typescript
public readonly waitForSslPendingValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameConfig <a name="CustomHostnameConfig" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

const customHostnameConfig: customHostname.CustomHostnameConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname">hostname</a></code> | <code>string</code> | Hostname you intend to request a certificate for. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata associated with custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer">customOriginServer</a></code> | <code>string</code> | The custom origin server used for certificates. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni">customOriginSni</a></code> | <code>string</code> | The [custom origin SNI](https://developers.cloudflare.com/ssl/ssl-for-saas/hostname-specific-behavior/custom-origin) used for certificates. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#id CustomHostname#id}. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl">ssl</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]</code> | ssl block. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.waitForSslPendingValidation">waitForSslPendingValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for a custom hostname SSL sub-object to reach status `pending_validation` during creation. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname you intend to request a certificate for. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#hostname CustomHostname#hostname}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata associated with custom hostname.

Only supports primitive string values, all other values are accessible via the API directly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `customOriginServer`<sup>Optional</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer"></a>

```typescript
public readonly customOriginServer: string;
```

- *Type:* string

The custom origin server used for certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `customOriginSni`<sup>Optional</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni"></a>

```typescript
public readonly customOriginSni: string;
```

- *Type:* string

The [custom origin SNI](https://developers.cloudflare.com/ssl/ssl-for-saas/hostname-specific-behavior/custom-origin) used for certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#id CustomHostname#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl"></a>

```typescript
public readonly ssl: IResolvable | CustomHostnameSsl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]

ssl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#ssl CustomHostname#ssl}

---

##### `waitForSslPendingValidation`<sup>Optional</sup> <a name="waitForSslPendingValidation" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.waitForSslPendingValidation"></a>

```typescript
public readonly waitForSslPendingValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for a custom hostname SSL sub-object to reach status `pending_validation` during creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#wait_for_ssl_pending_validation CustomHostname#wait_for_ssl_pending_validation}

---

### CustomHostnameSsl <a name="CustomHostnameSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

const customHostnameSsl: customHostname.CustomHostnameSsl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#certificate_authority CustomHostname#certificate_authority}. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate">customCertificate</a></code> | <code>string</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey">customKey</a></code> | <code>string</code> | The key for a custom uploaded certificate. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method">method</a></code> | <code>string</code> | Domain control validation (DCV) method used for this hostname. Available values: `http`, `txt`, `email`. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings">settings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type">type</a></code> | <code>string</code> | Level of validation to be used for this hostname. Available values: `dv`. Defaults to `dv`. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the certificate covers a wildcard. |

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#certificate_authority CustomHostname#certificate_authority}.

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `customKey`<sup>Optional</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#custom_key CustomHostname#custom_key}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Domain control validation (DCV) method used for this hostname. Available values: `http`, `txt`, `email`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#method CustomHostname#method}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings"></a>

```typescript
public readonly settings: IResolvable | CustomHostnameSslSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#settings CustomHostname#settings}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Level of validation to be used for this hostname. Available values: `dv`. Defaults to `dv`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#type CustomHostname#type}

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#wildcard CustomHostname#wildcard}

---

### CustomHostnameSslSettings <a name="CustomHostnameSslSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

const customHostnameSslSettings: customHostname.CustomHostnameSslSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers">ciphers</a></code> | <code>string[]</code> | List of SSL/TLS ciphers to associate with this certificate. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints">earlyHints</a></code> | <code>string</code> | Whether early hints should be supported. Available values: `on`, `off`. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2">http2</a></code> | <code>string</code> | Whether HTTP2 should be supported. Available values: `on`, `off`. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Lowest version of TLS this certificate should support. Available values: `1.0`, `1.1`, `1.2`, `1.3`. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13">tls13</a></code> | <code>string</code> | Whether TLSv1.3 should be supported. Available values: `on`, `off`. |

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

List of SSL/TLS ciphers to associate with this certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#ciphers CustomHostname#ciphers}

---

##### `earlyHints`<sup>Optional</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

Whether early hints should be supported. Available values: `on`, `off`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#early_hints CustomHostname#early_hints}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

Whether HTTP2 should be supported. Available values: `on`, `off`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#http2 CustomHostname#http2}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Lowest version of TLS this certificate should support. Available values: `1.0`, `1.1`, `1.2`, `1.3`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

Whether TLSv1.3 should be supported. Available values: `on`, `off`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname#tls13 CustomHostname#tls13}

---

### CustomHostnameSslValidationErrors <a name="CustomHostnameSslValidationErrors" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrors.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

const customHostnameSslValidationErrors: customHostname.CustomHostnameSslValidationErrors = { ... }
```


### CustomHostnameSslValidationRecords <a name="CustomHostnameSslValidationRecords" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecords.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

const customHostnameSslValidationRecords: customHostname.CustomHostnameSslValidationRecords = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CustomHostnameSslList <a name="CustomHostnameSslList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.get"></a>

```typescript
public get(index: number): CustomHostnameSslOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSsl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>[]

---


### CustomHostnameSslOutputReference <a name="CustomHostnameSslOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey">resetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings"></a>

```typescript
public putSettings(value: IResolvable | CustomHostnameSslSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]

---

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority"></a>

```typescript
public resetCertificateAuthority(): void
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate"></a>

```typescript
public resetCustomCertificate(): void
```

##### `resetCustomKey` <a name="resetCustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey"></a>

```typescript
public resetCustomKey(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList">CustomHostnameSslSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.validationErrors">validationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList">CustomHostnameSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.validationRecords">validationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList">CustomHostnameSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput">customKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate">customCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey">customKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings"></a>

```typescript
public readonly settings: CustomHostnameSslSettingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList">CustomHostnameSslSettingsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `validationErrors`<sup>Required</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.validationErrors"></a>

```typescript
public readonly validationErrors: CustomHostnameSslValidationErrorsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList">CustomHostnameSslValidationErrorsList</a>

---

##### `validationRecords`<sup>Required</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.validationRecords"></a>

```typescript
public readonly validationRecords: CustomHostnameSslValidationRecordsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList">CustomHostnameSslValidationRecordsList</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: string;
```

- *Type:* string

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: string;
```

- *Type:* string

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput"></a>

```typescript
public readonly customKeyInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | CustomHostnameSslSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameSsl | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a> | cdktf.IResolvable

---


### CustomHostnameSslSettingsList <a name="CustomHostnameSslSettingsList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.get"></a>

```typescript
public get(index: number): CustomHostnameSslSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomHostnameSslSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>[]

---


### CustomHostnameSslSettingsOutputReference <a name="CustomHostnameSslSettingsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints">resetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2">resetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13">resetTls13</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCiphers` <a name="resetCiphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers"></a>

```typescript
public resetCiphers(): void
```

##### `resetEarlyHints` <a name="resetEarlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints"></a>

```typescript
public resetEarlyHints(): void
```

##### `resetHttp2` <a name="resetHttp2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2"></a>

```typescript
public resetHttp2(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetTls13` <a name="resetTls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13"></a>

```typescript
public resetTls13(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput">earlyHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input">http2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input">tls13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2">http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `earlyHintsInput`<sup>Optional</sup> <a name="earlyHintsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput"></a>

```typescript
public readonly earlyHintsInput: string;
```

- *Type:* string

---

##### `http2Input`<sup>Optional</sup> <a name="http2Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input"></a>

```typescript
public readonly http2Input: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `tls13Input`<sup>Optional</sup> <a name="tls13Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input"></a>

```typescript
public readonly tls13Input: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameSslSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a> | cdktf.IResolvable

---


### CustomHostnameSslValidationErrorsList <a name="CustomHostnameSslValidationErrorsList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslValidationErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.get"></a>

```typescript
public get(index: number): CustomHostnameSslValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CustomHostnameSslValidationErrorsOutputReference <a name="CustomHostnameSslValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslValidationErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrors">CustomHostnameSslValidationErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameSslValidationErrors;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationErrors">CustomHostnameSslValidationErrors</a>

---


### CustomHostnameSslValidationRecordsList <a name="CustomHostnameSslValidationRecordsList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslValidationRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.get"></a>

```typescript
public get(index: number): CustomHostnameSslValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CustomHostnameSslValidationRecordsOutputReference <a name="CustomHostnameSslValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer"></a>

```typescript
import { customHostname } from '@cdktf/provider-cloudflare'

new customHostname.CustomHostnameSslValidationRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.cnameName">cnameName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.cnameTarget">cnameTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.txtName">txtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.txtValue">txtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecords">CustomHostnameSslValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cnameName`<sup>Required</sup> <a name="cnameName" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.cnameName"></a>

```typescript
public readonly cnameName: string;
```

- *Type:* string

---

##### `cnameTarget`<sup>Required</sup> <a name="cnameTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.cnameTarget"></a>

```typescript
public readonly cnameTarget: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomHostnameSslValidationRecords;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslValidationRecords">CustomHostnameSslValidationRecords</a>

---



